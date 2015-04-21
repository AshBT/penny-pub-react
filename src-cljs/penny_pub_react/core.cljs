(ns penny-pub-react.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent.session :as session]
            [clojure.string :as string]
            [penny-pub-react.pubnub :as pubnub])
  (:require-macros [secretary.core :refer [defroute]]))

;; ----------------------------------------------------------------------------------------------------
;; DECLARATION OF ATOMS
;; ----------------------------------------------------------------------------------------------------
(def team-name (atom ""))
(def team-slug (atom ""))
(def user-name (atom ""))
(def player-number (atom ""))
(def batch-size (atom ""))
(def total-coins (atom ""))



;; ----------------------------------------------------------------------------------------------------
;; GENERAL FUNCTIONS
;; ----------------------------------------------------------------------------------------------------


;convert string to slug
(defn convert-team-name-to-slug []
    (reset! team-slug (str @team-name "-url")))

;Return the team URL
(defn print-team-url []
  (str (.-location.href js/window) "team/" @team-slug))


;; ----------------------------------------------------------------------------------------------------
;; HTML COMPONENTS
;; ----------------------------------------------------------------------------------------------------

;; NAVBAR HTML DEFINITION
(defn navbar []
      
       [:div.container
        [:div.navbar-header
         [:button {:class "navbar-toggle collapsed"
                   :type "button"
                   :data-toggle "collapse"
                   :data-target ".bs-navbar-collapse"}
           [:span.sr-only "Toggle navigation"]        
           [:span.icon-bar]        
           [:span.icon-bar]        
           [:span.icon-bar]]  
         [:a.navbar-brand {:href "#/"} [:i.icon-bitcoin-stack] "Remotely Flipped"]]
        [:nav.collapse.navbar-collapse.bs-navbar-collapse 
           [:ul.nav.navbar-nav.navbar-right
              [:li [:a {:href "#/"} "me@me.com"]]]]])

;;COPY RIGHT 
(defn copyright []
  [:p.copyright "Built by: " [:a {:href "http://www.agilityfeat.com"} "www.agilityfeat.com"]])

;; HOME PAGE DEFINITION
(defn home-page []
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-bitcoin-stack]
          [:h1 "Remotely Flipped"]
          [:div.separ]
          [:h2 "The Lean Penny Game for Remote Teams"]
          [:p "Have you ever struggled to teach a product team that its more efficient to work in small batch sizes?
               Agile and Lean coaches have been using the penny game to show how teams that work in small chunks are much more efficient.
               Usually this game is played in person with nothing but a stack of coins."]
          [:p "We’ve built thus online version so remote teams can play it together in real-time."]     
          [:form 
            [:div.form-group
              [:input.form-control {:type "text" 
                                    :id "team" 
                                    :key "team"
                                    :on-change #(reset! team-name (-> % .-target .-value))
                                    :placeholder "Team Name"}]
              [:input.start-game {:type "button" 
                                  :id "btnTeam" 
                                  :placeholder "Team Name" 
                                  :onClick (fn [] 
                                                  (convert-team-name-to-slug)
                                                  (pubnub/connect)
                                                  (pubnub/suscribe-moderator @team-name @team-slug)
                                                  (session/put! :page :step2))
                                  :value "Start Game"}]]]
          [copyright]]]]])

;; STEP 2 
(defn step2-page []
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-bitcoin-stack]
          [:h1 "Its time to get flipped!"]
          [:div.separ]
          [:h2 "Your team url:"]
          [:span.url-wrap [:i.icon-link2] (print-team-url)]
          [:p "Send this to your team so the can join in!"]     
          
          [:div.people-joined-list
            [:strong "Joined:"]
            [:span [:i.icon-user-check] "Mariana Lopez"]
            [:span [:i.icon-user-check] "Arin Sime"]
            [:span [:i.icon-user-check] "David Alfaro"]]
          [copyright]]]]])

;; STEP 3 
(defn step3-page []
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-collaboration]
          [:h1 [:span.title "Team:"] @team-name]
          [:div.separ]
          [:h2 [:span.title (str "You are player " @player-number)] [:span "of 4 max"]]
          [:p "Type your name:"]     
          [:form 
            [:div.form-group
              [:input.form-control {:type "text" 
                                    :id "user_name" 
                                    :key "user_name"
                                    :on-change #(reset! user-name (-> % .-target .-value))
                                    :placeholder "Your Name"}]
              [:input.start-game {:type "button" 
                                  :id "btnReady" 
                                  :onClick (fn [] 
                                                  (session/put! :user-name @user-name)
                                                  (pubnub/set-user-name @team-slug @user-name) 
                                                  (session/put! :page :step4))
                                  :value "I'm Ready"}]]]
          [copyright]]]]])          

;; STEP 4
(defn step4-page []
  [:div.instructions-wrap
    [:div.container
      [:div.row
        [:div.col-md-8.col-md-offset-2
          [:i.icon-bitcoin-stack]
          [:h1 "Lets Flip!"]
          [:div.separ]
          [:h2 @team-name]
          [:div.team-members-in 
            [:span.plyrs "Players:"]
            [:ul.list-online
              [:li.active [:i.icon-user-check] "[member name]"]
              [:li [:i.icon-user-block] "[member name]"]
              [:li.active [:i.icon-user-check] "[member name]"]
              [:li [:i.icon-user-block] "[member name]"]]]
          [:p "Please wait while the organizer explains the game to you and then starts the round."]         
          [:div.batch
            [:span.title "Total coins" [:br] "batch size"]
            [:div.batch-size
                [:input.top {:type "text" 
                                    :id "total_coins" 
                                    :key "total_coins"
                                    :on-change #(reset! total-coins (-> % .-target .-value))
                                    :placeholder "Type Size"}]
                [:input.bottom {:type "text" 
                                    :id "batch_size" 
                                    :key "batch_size"
                                    :on-change #(reset! batch-size (-> % .-target .-value))
                                    :placeholder "Type Size"}]]
          [:form 
            [:div.form-group
              [:input.start-game {:type "button" 
                                  :id "btnStart" 
                                  :onClick (fn [] 
                                                  
                                                  (session/put! :page :step4))
                                  :value "Start Flipping"}]]]
          [copyright]]]]]])                    

;; ----------------------------------------------------------------------------------------------------
;; Declaration of routes
;; ----------------------------------------------------------------------------------------------------



(def pages
  {:home home-page 
   :step2 step2-page
   :step3 step3-page
   :step4 step4-page})

(defn page []
  [(pages (session/get :page))])

(defroute "/" [] (session/put! :page :home))



(defn mount-components []
  (reagent/render-component [navbar] (.getElementById js/document "top"))
  (reagent/render-component [page] (.getElementById js/document "app")))

(defn set-page []
  (if (= -1 (.indexOf (.-location.href js/window) "/team/"))
    (session/put! :page :home)
    (do 
        (session/put! :page :step3)
        (pubnub/connect)
        (reset! team-slug (string/replace (.-location.pathname js/window) "/team/" ""))
        (pubnub/suscribe-user @team-slug)
        (pubnub/get-state @team-slug team-name player-number))))

;; ----------------------------------------------------------------------------------------------------
;; Init function
;; ----------------------------------------------------------------------------------------------------

(defn init! []
  (secretary/set-config! :prefix "#")
  (set-page)
  (mount-components))


