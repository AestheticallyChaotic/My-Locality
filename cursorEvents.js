AFRAME.registerComponent("cursor-events", {

    init : function() {
        this.lifeHandler();
    },

    handleMouseEnterEvents : function() {
        this.el.addEventListener("mouseenter", () => {
            const placeContainer = document.querySelector("#places-container");
            const { state } = placeContainer.getAttribute("tour");
            if (state === "places-list") {
                this.handlePlacesListState();
            }
        });
    },
    handlePlacesListState: function() {
        const id = this.elgetAttribute("id");
        const placesId = ["place-city", "place-museum", "place-peaks", "place-rooftop", "place-rural"];
        if (placesId.includes(id)) {
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId : id
            });
            this.el.setAttribute("material", {
                opacity : 1
            });
        }
    },

    handleMouseLeaveEvents: function() {
        this.el.addEventListener("mouseleave", () => {
          const placesContainer = document.querySelector("#places-container");
          const { state } = placesContainer.getAttribute("tour");
          if (state === "places-list") {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
              const el = document.querySelector(`#${selectedItemId}`);
              const id = el.getAttribute("id");
              if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "#0077CC",
                  opacity: 1
                });
              }
            }
          }
        });
      },

    handleMouseClick : function() {

    },
})