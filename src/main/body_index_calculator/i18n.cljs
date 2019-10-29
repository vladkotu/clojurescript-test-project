(ns body-index-calculator.i18n
  (:require-macros
   [body-index-calculator.tempura :refer [get-dict]])
  (:require
   [taoensso.tempura :as tempura]))

;; (def dictionary  (get-dict))

(def local-dictionary
  {:en {:missing "missing text"
        :locale  {:label "Language"
                  :en    {:label "En"
                          :title "English"}
                  :ru    {:label "Ru"
                          :title "Russian"}}
        :theme   {:label "Color Theme"
                  :light {:label "Light"}
                  :dark  {:label "Dark"}}
        :system  {:label "Measurement system"
                  :metric
                  {:label "Metric"
                   :units
                   {:len  "cm"
                    :time "years"
                    :mass "kg"}}
                  :imperial
                  {:label "Imperial"
                   :units
                   {:len  "ft|in"
                    :time :en.metric/time
                    :mass "lb"}}}}
   :ru {:missing "Нэту тэкста"
        :locale  {:label "Выбор языка"
                  :en    {:label "En"
                          :title "Английский"}
                  :ru    {:label "Ru"
                          :title "Русский"}}
        :theme   {:label "Цветовая тема"
                  :light {:label "Светлая"}
                  :dark  {:label "Темная"}}
        :system  {:label "Система исчисления"
                  :metric
                  {:label "Метрическая"
                   :units
                   {:len  "cм"
                    :time "лет"
                    :mass "кг"}
                   :imperial
                   {:label "Имперская"
                    :units
                    {:len  "футы"
                     :time :ru.metric/time
                     :mass "фунты"}}}}}})

(def tr (partial tempura/tr {:dict local-dictionary}))
