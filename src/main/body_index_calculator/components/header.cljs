(ns body-index-calculator.components.header
  (:require
   [body-index-calculator.components.headings :refer [h5]]
   ["@material-ui/core" :refer [AppBar
                                CssBaseline
                                Grid
                                Toolbar]]))

(defn header-content []
  [:> AppBar {:position "static" :color "primary"}
   [:> Toolbar
    [h5 {:style {:color "red"}}
     "Body Indexes Calculator"]]])

(defn header []
  [:> Grid {:item true} [header-content]])
