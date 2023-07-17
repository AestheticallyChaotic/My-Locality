AFRAME.registerComponent("tour", {

    createPlace : function() {
        const details = {
            rural : {
                position : { x : 20, y : -4.5, z : -5.5 },
                rotation : { x : 0, y : -90, z : 0 },
                src : "./images/rural.jpg",
                title : "Rural",
                id : "rural"
            },
            city : {
                position : { x : 4.6, y : -5.5, z : 25 },
                rotation : { x : 180, y : 0, z : 0 },
                src : "./images/city.jpg",
                title : "City",
                id : "City"
            },
            museum : {
                position : { x : -9, y : 34, z : -100 },
                rotation : { x : 0, y : 0, z : 0 },
                src : "./images/museum.jpg",
                title : "Museum",
                id : "Museum"
            },
            peaks : {
                position : { x : 20, y : -4.5, z : -5.5 },
                rotation : { x : 0, y : -90, z : 0 },
                src : "./images/peaks.jpg",
                title : "Peaks",
                id : "peaks"
            },
            rooftop : {
                position : { x : 20, y : -4.5, z : -5.5 },
                rotation : { x : 0, y : -90, z : 0 },
                src : "./images/rooftop.jpg",
                title : "Rooftop",
                id : "Rooftop"
            }
        };

        for (var key in details) {
            const item = details[key];
            const thumbNail = this.createThumbnail(item);
            const title = this.createTitleEl(item);
            thumbNail.appendChild(title);
            this.placesContainer.appendChild(thumbNail);
        }

    },

    createThumbnail : function(item) {
        const entityEl = document.createElement("a-entity");
        const id = `place-${item.id}`;
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id,", id);
        entityEl.setAttribute("geometry", {
            primitive : "circle",
            radius : 3
        });
        entityEl.setAttribute("position", item.position);
        entityEl.setAttribute("rotation", item.rotation);
        entityEl.setAttribute("material", { src : item.src, opactiy : 0.6 });
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    },

    createTitle: function(position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 60,
          color: "#e65100",
          value: item.title
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
      }, 

    showView: function() {
    const { selectedCard } = this.data;
    const skyEl = document.querySelector("#main-container");
    skyEl.setAttribute("material", {
        src: `./images/${selectedCard}/place-0.jpg`,
        color: "#fff"
    });
    },

    hideEl: function(elList) {
        elList.map(el => {
          el.setAttribute("visible", false);
        });
      },
})