(ns body-index-calculator.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [body-index-calculator.events]
            [clojure.string :refer [split]]
            [body-index-calculator.subscriptions]
            [body-index-calculator.events :as e]
            [body-index-calculator.components.app :refer [app]]
            [orchestra-cljs.spec.test :as st]))

(defn error-boundary [comp]
  (let [error (r/atom nil)]
    (r/create-class
     {:get-derived-state-from-error
      (fn [e] (reset! error e) #js {:error true})
      :component-did-catch
      (fn [_ error _]
        (prn :component-did-catch)
        (doseq [r (split (str (.-message error)) "\n" )]
          (prn r)))
      :reagent-render
      (fn [] (if @error
               [:div "Something went wrong."
                [:button {:on-click #(reset! error nil)} "Try again"]]
               comp))})))

(defn render []
  (r/render [error-boundary [app]] (js/document.getElementById "core"))
  (println "app rendered"))

(defn instrument-specs []
  (let [done (st/instrument)]
    (prn (str (count done) " functions found and instrumented"))))

(defn on-hmr-reload []
  (prn :on-hmr-reload)
  (rf/clear-subscription-cache!)
  (prn "re-frame cache clean")
  (instrument-specs)
  (render))

(defn init []
  (prn "start initialisation")
  (rf/dispatch-sync [::e/init])
  (prn "db initialisation finished")
  (render)
  (instrument-specs))
