var wms_layers = [];

var format_IndiaStates_0 = new ol.format.GeoJSON();
var features_IndiaStates_0 = format_IndiaStates_0.readFeatures(json_IndiaStates_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndiaStates_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaStates_0.addFeatures(features_IndiaStates_0);
var lyr_IndiaStates_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndiaStates_0, 
                style: style_IndiaStates_0,
                interactive: true,
                title: '<img src="styles/legend/IndiaStates_0.png" /> India States'
            });
var format_AlappuzhaDistrict_1 = new ol.format.GeoJSON();
var features_AlappuzhaDistrict_1 = format_AlappuzhaDistrict_1.readFeatures(json_AlappuzhaDistrict_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlappuzhaDistrict_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlappuzhaDistrict_1.addFeatures(features_AlappuzhaDistrict_1);
var lyr_AlappuzhaDistrict_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlappuzhaDistrict_1, 
                style: style_AlappuzhaDistrict_1,
                interactive: true,
                title: '<img src="styles/legend/AlappuzhaDistrict_1.png" /> Alappuzha District'
            });

        var lyr_OpenStreetMapStandard_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Floodedareas2018_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Flooded areas 2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Floodedareas2018_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8500500.000000, 1044132.668636, 8518700.000000, 1069578.051412]
                            })
                        });
var format_KuttanadVCIvillageclusters_4 = new ol.format.GeoJSON();
var features_KuttanadVCIvillageclusters_4 = format_KuttanadVCIvillageclusters_4.readFeatures(json_KuttanadVCIvillageclusters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KuttanadVCIvillageclusters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KuttanadVCIvillageclusters_4.addFeatures(features_KuttanadVCIvillageclusters_4);
var lyr_KuttanadVCIvillageclusters_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KuttanadVCIvillageclusters_4, 
                style: style_KuttanadVCIvillageclusters_4,
                interactive: true,
    title: 'Kuttanad VCI village clusters<br />\
    <img src="styles/legend/KuttanadVCIvillageclusters_4_0.png" /> 0.484 - 0.504<br />\
    <img src="styles/legend/KuttanadVCIvillageclusters_4_1.png" /> 0.504 - 0.525<br />\
    <img src="styles/legend/KuttanadVCIvillageclusters_4_2.png" /> 0.525 - 0.545<br />\
    <img src="styles/legend/KuttanadVCIvillageclusters_4_3.png" /> 0.545 - 0.566<br />\
    <img src="styles/legend/KuttanadVCIvillageclusters_4_4.png" /> 0.566 - 0.586<br />'
        });
var lyr_KuttanadSeasonalVCI202021_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kuttanad Seasonal VCI 2020-21",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KuttanadSeasonalVCI202021_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8500500.000047, 1044132.668589, 8518699.999968, 1069578.051441]
                            })
                        });
var format_MainCCELocations_6 = new ol.format.GeoJSON();
var features_MainCCELocations_6 = format_MainCCELocations_6.readFeatures(json_MainCCELocations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainCCELocations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainCCELocations_6.addFeatures(features_MainCCELocations_6);
var lyr_MainCCELocations_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainCCELocations_6, 
                style: style_MainCCELocations_6,
                interactive: true,
                title: '<img src="styles/legend/MainCCELocations_6.png" /> Main CCE Locations'
            });
var format_BackupCCELocations_7 = new ol.format.GeoJSON();
var features_BackupCCELocations_7 = format_BackupCCELocations_7.readFeatures(json_BackupCCELocations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BackupCCELocations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BackupCCELocations_7.addFeatures(features_BackupCCELocations_7);
var lyr_BackupCCELocations_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BackupCCELocations_7, 
                style: style_BackupCCELocations_7,
                interactive: true,
                title: '<img src="styles/legend/BackupCCELocations_7.png" /> Back up CCE Locations'
            });
var format_KuttanadVillages_8 = new ol.format.GeoJSON();
var features_KuttanadVillages_8 = format_KuttanadVillages_8.readFeatures(json_KuttanadVillages_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KuttanadVillages_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KuttanadVillages_8.addFeatures(features_KuttanadVillages_8);
var lyr_KuttanadVillages_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KuttanadVillages_8, 
                style: style_KuttanadVillages_8,
                interactive: true,
                title: '<img src="styles/legend/KuttanadVillages_8.png" /> Kuttanad Villages'
            });

lyr_IndiaStates_0.setVisible(true);lyr_AlappuzhaDistrict_1.setVisible(true);lyr_OpenStreetMapStandard_2.setVisible(true);lyr_Floodedareas2018_3.setVisible(false);lyr_KuttanadVCIvillageclusters_4.setVisible(true);lyr_KuttanadSeasonalVCI202021_5.setVisible(true);lyr_MainCCELocations_6.setVisible(true);lyr_BackupCCELocations_7.setVisible(true);lyr_KuttanadVillages_8.setVisible(true);
var layersList = [lyr_IndiaStates_0,lyr_AlappuzhaDistrict_1,lyr_OpenStreetMapStandard_2,lyr_Floodedareas2018_3,lyr_KuttanadVCIvillageclusters_4,lyr_KuttanadSeasonalVCI202021_5,lyr_MainCCELocations_6,lyr_BackupCCELocations_7,lyr_KuttanadVillages_8];
lyr_IndiaStates_0.set('fieldAliases', {'st_nm': 'st_nm', });
lyr_AlappuzhaDistrict_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_KuttanadVCIvillageclusters_4.set('fieldAliases', {'CEN_2001': 'CEN_2001', 'SUB_DIST': 'SUB_DIST', 'TYPE': 'TYPE', 'STATE': 'STATE', 'NAME': 'NAME', 'DISTRICT': 'DISTRICT', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_MainCCELocations_6.set('fieldAliases', {'id': 'id', 'CCE_ID': 'CCE_ID', });
lyr_BackupCCELocations_7.set('fieldAliases', {'id': 'id', 'CCE_ID': 'CCE_ID', });
lyr_KuttanadVillages_8.set('fieldAliases', {'CEN_2001': 'CEN_2001', 'SUB_DIST': 'SUB_DIST', 'TYPE': 'TYPE', 'STATE': 'STATE', 'NAME': 'NAME', 'DISTRICT': 'DISTRICT', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_IndiaStates_0.set('fieldImages', {'st_nm': 'TextEdit', });
lyr_AlappuzhaDistrict_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_KuttanadVCIvillageclusters_4.set('fieldImages', {'CEN_2001': 'TextEdit', 'SUB_DIST': 'TextEdit', 'TYPE': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'DISTRICT': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', });
lyr_MainCCELocations_6.set('fieldImages', {'id': 'TextEdit', 'CCE_ID': 'TextEdit', });
lyr_BackupCCELocations_7.set('fieldImages', {'id': 'TextEdit', 'CCE_ID': 'TextEdit', });
lyr_KuttanadVillages_8.set('fieldImages', {'CEN_2001': 'TextEdit', 'SUB_DIST': 'TextEdit', 'TYPE': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'DISTRICT': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', });
lyr_IndiaStates_0.set('fieldLabels', {'st_nm': 'no label', });
lyr_AlappuzhaDistrict_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_KuttanadVCIvillageclusters_4.set('fieldLabels', {'CEN_2001': 'no label', 'SUB_DIST': 'no label', 'TYPE': 'no label', 'STATE': 'no label', 'NAME': 'inline label', 'DISTRICT': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', });
lyr_MainCCELocations_6.set('fieldLabels', {'id': 'no label', 'CCE_ID': 'no label', });
lyr_BackupCCELocations_7.set('fieldLabels', {'id': 'no label', 'CCE_ID': 'no label', });
lyr_KuttanadVillages_8.set('fieldLabels', {'CEN_2001': 'no label', 'SUB_DIST': 'no label', 'TYPE': 'no label', 'STATE': 'no label', 'NAME': 'no label', 'DISTRICT': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', });
lyr_KuttanadVillages_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});