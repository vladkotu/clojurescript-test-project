(ns body-index-calculator.components.common
  (:require
   [body-index-calculator.mui-theme :refer [js-theme spacing]]
   [body-index-calculator.helpers   :refer [with-styles-react]]
   ["@material-ui/styles/ThemeProvider" :default ThemeProvider]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/Paper" :default Paper]
   ["@material-ui/core/Box" :default Box]
   ["@material-ui/core/CssBaseline" :default CssBaseline]))

(def spacing-paper
  (with-styles-react
    {:root {:margin  (spacing 2 3)
            :padding (spacing 2 2)}}
    Paper))

(defn with-theme [& children]
  [:> ThemeProvider {:theme js-theme}
   [:> CssBaseline
    (into [:<>] children)]])

(defn item-box-paper [props & children]
  [:> Grid (merge (:item props) {:item true})
   [:> Box (:outer props)
    [:> Paper (:paper props)
     [:> Box (:inner props)
      (into [:<>] children)]]]])


(def form-control-props {:full-width true
                         :variant ""
                         :style {:margin "20px 0 20px 0"}})

(def form-label-styles {:margin-bottom "10px"})
