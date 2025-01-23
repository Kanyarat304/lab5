ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32647").setExtent([599343.959556, 1379530.289362, 607991.672290, 1383250.964592]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lab5304Sheet1_1 = new ol.format.GeoJSON();
var features_lab5304Sheet1_1 = format_lab5304Sheet1_1.readFeatures(json_lab5304Sheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_lab5304Sheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab5304Sheet1_1.addFeatures(features_lab5304Sheet1_1);
var lyr_lab5304Sheet1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab5304Sheet1_1, 
                style: style_lab5304Sheet1_1,
                popuplayertitle: 'lab5 - 304(Sheet1)',
                interactive: true,
    title: 'lab5 - 304(Sheet1)<br />\
    <img src="styles/legend/lab5304Sheet1_1_0.png" /> Rajabhakti Park<br />\
    <img src="styles/legend/lab5304Sheet1_1_1.png" /> Rajamangala University of Technology Rattana kosin<br />\
    <img src="styles/legend/lab5304Sheet1_1_2.png" /> Suan Son Pradipat Beach<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_lab5304Sheet1_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lab5304Sheet1_1];
lyr_lab5304Sheet1_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'X (longitude)': 'X (longitude)', 'Y': 'Y', 'Picture': 'Picture', });
lyr_lab5304Sheet1_1.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', 'X (longitude)': 'TextEdit', 'Y': 'TextEdit', 'Picture': 'TextEdit', });
lyr_lab5304Sheet1_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'header label - visible with data', 'X (longitude)': 'hidden field', 'Y': 'hidden field', 'Picture': 'header label - always visible', });
lyr_lab5304Sheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});