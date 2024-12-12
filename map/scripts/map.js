class StructureModal {
    constructor(description, images) {
        this.description = description;
        this.images = images;
    }
}

class Cabin {
    constructor(capacity, ) {
        this.capacity = capacity;
    }
}

class Structure {
    constructor(name, image, bounds, modal, cabin) {
        this.name = name;
        this.image = image;
        this.bounds = bounds;
        this.modal = modal;
        this.cabin = cabin;
    }

     static values = [
         new Structure("Activity Center", "images/structures/activity-center.svg", [[1999.054484820935, 1456.733117600812], [2170.590513221411, 1671.8129070567936]], new StructureModal("blah blah blah")),
         new Structure("Dining Hall", "images/structures/dining-hall.svg", [[1873.4256762068521, 1211.0573180328752], [1979.52583586258, 1347.471809018811]], new StructureModal("blah blah blah")),
         new Structure("Woodshed", "images/structures/woodshed.svg", [[953.419634647539, 2152.6613799628058], [1006.2597589774027, 2249.152041782557]]),
         new Structure("House 1", "images/structures/house-1.svg", [[906.3985067732181, 1988.6201352616424], [1017.0458161284772, 2071.984546419714]]),
         new Structure("Waterfront", "images/structures/waterfront.svg", [[1791.5930592634236, 1803.7820227281773], [1899.541329112143, 1930.8824049694115]], new StructureModal("blah blah blah")),
         new Structure("Swim Dock", "images/structures/swim-dock.svg", [[1661.8032813870188, 1876.6623936839155], [1816.9167695442934, 2056.4830423622016]], new StructureModal( "blah blah blah")),
         new Structure("Lake Tower", "images/structures/lake-tower.svg", [[1591.3012002313224, 1996.3404278274206], [1703.1656819001741, 2066.6142688758023]], new StructureModal("blah blah blah")),
         new Structure("Archery", "images/structures/archery.svg", [[1251.981883937589, 1309.5786762471182], [1336.8620116621712, 1374.7544886070655]], new StructureModal("blah blah blah")),
         new Structure("Rifle Range", "images/structures/rifle-range.svg", [[1157.0763258366428, 2447.953448365695], [1268.070180579994, 2547.8479176347114]], new StructureModal("blah blah blah")),
         new Structure("Vehicle Shed", "images/structures/vehicle_shed.svg", [[1456.5495141362403, 1718.4525734009737], [1503.646146691119, 1798.8614582507662]]),
         new Structure("House 2", "images/structures/house-2.svg", [[1307.6323395759382, 1719.318998047211], [1419.7905119916343, 1781.3358698535371]]),
         new Structure("Main Lodge", "images/structures/lodge.svg", [[1495.0024629056893, 1811.6841711810541], [1640.1483330907076, 1873.7010429873803]], new StructureModal("blah blah blah")),
         new Structure("Infirmary", "images/structures/infirmary.svg", [[1939.002823234995, 1432.427180030484], [1974.6124722399031, 1489.8620977803357]], new StructureModal("blah blah blah")),
         new Structure("Flag", "images/structures/flag.svg", [[1857.4452400302057, 1317.553534015197], [2019.4117080847875, 1374.9884517650487]]),
         new Structure("Chapel", "images/structures/chapel.svg", [[2127.389353454509, 2098.669906484496], [2265.233156054153, 2242.2572008591255]], new StructureModal("blah blah blah")),
         new Structure("Nature Center", "images/structures/nature-center.svg", [[1397.490674322587, 748.7622349846732], [1585.4395285698765, 924.5853566998794]], new StructureModal("blah blah blah")),
         new Structure("Shower House", "images/structures/showerhouse.svg", [[1844.6720592605063, 993.5886955714706], [1929.1205655499716, 1111.0248996302582]], new StructureModal("blah blah blah")),
         new Structure("Fishing Dock", "images/structures/fishing-dock.svg", [[1384.1637984007662, 1905.3690425358], [1510.836557834964, 2045.2368810777268]], new StructureModal("blah blah blah")),

         new Structure("Poorboy", "images/structures/poorboy.svg", [[1835.619971285262, 1455.4026382017396], [1878.1218104201523, 1524.3245395015617]], new StructureModal(null), new Cabin(3)),
         new Structure("Anthony", "images/structures/anthony.svg", [[1686.3751474005348, 1193.4443970085022], [1735.7691766654073, 1237.0949344983896]], new StructureModal(null), new Cabin(12)),
         new Structure("Baird", "images/structures/baird.svg", [[2000.3386828053096, 1079.3349303005318], [2047.6592488980602, 1136.3347030940718]], new StructureModal(null), new Cabin(12)),
         new Structure("Bragg", "images/structures/bragg.svg", [[1966.6033944269311, 1013.1688425750472], [2005.6591384968303, 1069.4550619699019]], new StructureModal(null), new Cabin(12)),
         new Structure("Rose", "images/structures/rose.svg", [[1935.556728170004, 924.7024291746282], [1990.6942492098617, 980.9886485694828]], new StructureModal(null), new Cabin(12)),
         new Structure("Fain", "images/structures/fain.svg", [[1960.8155469261897, 843.1425653517042], [1999.8712909960889, 899.428784746559]], new StructureModal(null), new Cabin(12)),
         new Structure("Earp", "images/structures/earp.svg", [[2075.774989952674, 829.3907050169897], [2128.6151142825374, 883.3795277018505]], new StructureModal(null), new Cabin(12)),
         new Structure("Avey", "images/structures/avey.svg", [[1914.8774695542538, 778.817822557343], [1963.1228004641293, 837.4014386621917]], new StructureModal(null), new Cabin(12)),
         new Structure("Davis", "images/structures/davis.svg", [[2010.9264533972398, 915.7393633238217], [2086.138404311295, 1016.0219645425618]], new StructureModal(null), new Cabin(12)),
         new Structure("Peck", "images/structures/peck.svg", [[2071.9709490680625, 1038.2645105957693], [2106.8324300978015, 1080.7045744580605]], new StructureModal(null), new Cabin(12)),
         new Structure("Smith", "images/structures/smith.svg", [[1842.5193300173867, 1144.1055043258282], [1895.3594543472502, 1171.6742648457569]], new StructureModal(null), new Cabin(12)),
         new Structure("Laughlin", "images/structures/laughlin.svg", [[1795.4132886721964, 1202.6866708778657], [1837.9151278070865, 1244.039811657759]], new StructureModal(null), new Cabin(12)),
         new Structure("Everest", "images/structures/everest.svg", [[1785.074555439589, 1075.182251548593], [1818.386807734503, 1118.8327890384803]], new StructureModal(null), new Cabin(12)),
         new Structure("Sohlberg", "images/structures/sohlberg.svg", [[1687.4320590014038, 1122.2800666462076], [1741.4208816862642, 1161.3358107161068]], new StructureModal(null), new Cabin(12)),
         new Structure("Browne", "images/structures/browne.svg", [[1691.6070829704784, 1006.7841478097481], [1743.0678914906212, 1055.6059405083452]], new StructureModal(null), new Cabin(12)),
         new Structure("Buttram", "images/structures/buttram.svg", [[1772.0944922271597, 889.3454210361537], [1806.401697907255, 938.1672137347507]], new StructureModal(null), new Cabin(12)),
         new Structure("Prichard", "images/structures/prichard.svg", [[1652.200863718753, 831.340413617601], [1689.147085220394, 872.2451588515607]], new StructureModal(null), new Cabin(12)),
         new Structure("Heidbrink", "images/structures/heidbrink.svg", [[1743.046856783654, 803.3263251355569], [1787.0026372124555, 844.2506724313376]], new StructureModal(null), new Cabin(12)),
         new Structure("Ricks", "images/structures/ricks.svg", [[1637.510346589348, 713.8538767556283], [1708.7637737710843, 794.3438593127748]], new StructureModal(null), new Cabin(12)),
         new Structure("Clements", "images/structures/clements.svg", [[1686.955293606331, 674.4948751950172], [1732.426790601643, 716.9349390573084]], new StructureModal(null), new Cabin(12)),
         new Structure("Shdeed Godfrey Hayes", "images/structures/sgh.svg", [[1766.6922454961991, 655.9115753415908], [1832.1680517310301, 701.8595095414722]], new StructureModal(null), new Cabin(12)),
         new Structure("Farris", "images/structures/farris.svg", [[1863.1855955417536, 703.0017883787574], [1912.579624806626, 746.6523258686448]], new StructureModal(null), new Cabin(12)),
     ]
}

const map = L.map('map', {
    crs: L.CRS.Simple,
    renderer: L.svg(),
    minZoom: -2,
    maxZoom: 4,
    center: [1536, 2048],
    zoom: -0.6,
    zoomSnap: 0.20,
    attributionControl:false
});

L.ClickableTooltip = L.Tooltip.extend({
    onAdd: function (map) {
        L.Tooltip.prototype.onAdd.call(this, map);

        var el = this.getElement(),
            self = this;

        el.addEventListener('click', () =>  {
            self.fire("click");
        });

        el.addEventListener('mouseover', () => {
            self.fire("mouseover");
        });

        el.addEventListener('mouseout', () =>  {
            self.fire("mouseout");
        });

        el.style.pointerEvents = 'auto';
    }
});

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const carouselImages = document.getElementById('carousel-images');
const carouselThumbnails = document.getElementById('carousel-thumbnails');
const modalClose = document.getElementById('modal-close');

const zoomToCabins = document.getElementById('zoom-to-cabins');


const imageUrl = 'images/back.png';
const imageBounds = [[0, 0], [3072,4096]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

const cabins = [];

var overlays = L.layerGroup();

Structure.values.forEach(
    structure => {
        const interactable = structure.modal != null;
        const overlay = L.imageOverlay(structure.image, structure.bounds, {
            interactive: interactable,
            className: "structures-layer"
        }).addTo(overlays);

        if (interactable) {
            overlay.on('click', function () {
                const images = (structure.modal.images != null) ? structure.modal.images : "images/logo.png,images/test.jpg".split(',');

                modalTitle.textContent = structure.name;

                if (structure.modal.description == null && structure.cabin != null) {
                    modalDescription.textContent = `The capacity for this cabin is ${structure.cabin.capacity}.`
                } else {
                    modalDescription.textContent = structure.modal.description;
                }
                // Clear previous content
                carouselImages.innerHTML = '';
                carouselThumbnails.innerHTML = '';

                // Add images to carousel
                images.forEach((img, index) => {
                    // Main image
                    const imgElement = document.createElement('img');
                    imgElement.src = img;
                    if (index === 0) imgElement.classList.add('active');
                    carouselImages.appendChild(imgElement);

                    // Thumbnail
                    const thumbElement = document.createElement('img');
                    thumbElement.src = img;
                    if (index === 0) thumbElement.classList.add('selected');
                    thumbElement.addEventListener('click', () => {
                        // Update active image
                        document.querySelectorAll('.carousel-images img').forEach(image => image.classList.remove('active'));
                        imgElement.classList.add('active');

                        // Update selected thumbnail
                        document.querySelectorAll('.carousel-thumbnails img').forEach(thumb => thumb.classList.remove('selected'));
                        thumbElement.classList.add('selected');
                    });
                    carouselThumbnails.appendChild(thumbElement);
                });

                // Show the modal
                modalOverlay.classList.add('active');
            });

            const tooltip = new L.ClickableTooltip({
                interactive: true,
                className: "structure-tooltip",
                direction: 'center',
                permanent: false,
                noWrap: true
            }).setContent(structure.name).setLatLng(overlay.getCenter());


            tooltip.on('click', () => {
                overlay.fire('click')
            })

            tooltip.on('mouseover', () => {
                overlay.fire('mouseover')
            })

            tooltip.on('mouseout', () => {
                overlay.fire('mouseout')
            })

            overlay.on('mouseover', () => {
                tooltip.openTooltip()
                overlay.getElement().classList.add('highlighted');
            })

            overlay.on('mouseout', () => {
                tooltip.closeTooltip();
                overlay.getElement().classList.remove('highlighted');
            })

            overlay.bindTooltip(tooltip)
        }

        if (structure.cabin != null)
            cabins.push(overlay);

        overlays.addTo(map);
    }
);

// Close the modal with 'x'
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', event => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

zoomToCabins.addEventListener('click', () => {
    map.setView([1900, 1050], 0)

    cabins.forEach((cabin) => {
        cabin.getElement().classList.remove("highlighted");
    });

    setTimeout(() => {
        zoomToCabins.hidden = true;
    }, 400)
});

zoomToCabins.addEventListener('mouseenter', () => {
    cabins.forEach((cabin) => {
        cabin.getElement().classList.add("highlighted");
    });
})

zoomToCabins.addEventListener('mouseleave', () => {
    cabins.forEach((cabin) => {
        cabin.getElement().classList.remove("highlighted");
    });
})

map.on('moveend', () => {
    if (zoomToCabins.hidden && !isAtCabinView())
        zoomToCabins.hidden = false;
});

map.fitBounds(imageBounds);

function isAtCabinView() {
    const center = map.getCenter();
    return center.lat === 1900 && center.lng === 1090;
}