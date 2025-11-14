var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IllustrativeUSVesselsLocation_1 = new ol.format.GeoJSON();
var features_IllustrativeUSVesselsLocation_1 = format_IllustrativeUSVesselsLocation_1.readFeatures(json_IllustrativeUSVesselsLocation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IllustrativeUSVesselsLocation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IllustrativeUSVesselsLocation_1.addFeatures(features_IllustrativeUSVesselsLocation_1);
var lyr_IllustrativeUSVesselsLocation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IllustrativeUSVesselsLocation_1, 
                style: style_IllustrativeUSVesselsLocation_1,
                popuplayertitle: 'Illustrative US Vessels Location',
                interactive: false,
                title: '<img src="styles/legend/IllustrativeUSVesselsLocation_1.png" /> Illustrative US Vessels Location'
            });
var format_RooseveltRoadsNavalStation_2 = new ol.format.GeoJSON();
var features_RooseveltRoadsNavalStation_2 = format_RooseveltRoadsNavalStation_2.readFeatures(json_RooseveltRoadsNavalStation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RooseveltRoadsNavalStation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RooseveltRoadsNavalStation_2.addFeatures(features_RooseveltRoadsNavalStation_2);
var lyr_RooseveltRoadsNavalStation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RooseveltRoadsNavalStation_2, 
                style: style_RooseveltRoadsNavalStation_2,
                popuplayertitle: 'Roosevelt Roads Naval Station',
                interactive: false,
                title: '<img src="styles/legend/RooseveltRoadsNavalStation_2.png" /> Roosevelt Roads Naval Station'
            });
var format_TomahawkRange_3 = new ol.format.GeoJSON();
var features_TomahawkRange_3 = format_TomahawkRange_3.readFeatures(json_TomahawkRange_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TomahawkRange_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TomahawkRange_3.addFeatures(features_TomahawkRange_3);
var lyr_TomahawkRange_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TomahawkRange_3, 
                style: style_TomahawkRange_3,
                popuplayertitle: 'Tomahawk Range',
                interactive: true,
                title: '<img src="styles/legend/TomahawkRange_3.png" /> Tomahawk Range'
            });
var format_FA18SHTotalRange_4 = new ol.format.GeoJSON();
var features_FA18SHTotalRange_4 = format_FA18SHTotalRange_4.readFeatures(json_FA18SHTotalRange_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FA18SHTotalRange_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FA18SHTotalRange_4.addFeatures(features_FA18SHTotalRange_4);
var lyr_FA18SHTotalRange_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FA18SHTotalRange_4, 
                style: style_FA18SHTotalRange_4,
                popuplayertitle: 'FA18 SH Total Range',
                interactive: true,
                title: '<img src="styles/legend/FA18SHTotalRange_4.png" /> FA18 SH Total Range'
            });
var format_FA18SHCombatRange_5 = new ol.format.GeoJSON();
var features_FA18SHCombatRange_5 = format_FA18SHCombatRange_5.readFeatures(json_FA18SHCombatRange_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FA18SHCombatRange_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FA18SHCombatRange_5.addFeatures(features_FA18SHCombatRange_5);
var lyr_FA18SHCombatRange_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FA18SHCombatRange_5, 
                style: style_FA18SHCombatRange_5,
                popuplayertitle: 'FA18 SH Combat Range',
                interactive: true,
                title: '<img src="styles/legend/FA18SHCombatRange_5.png" /> FA18 SH Combat Range'
            });
var format_F35TotalRange_6 = new ol.format.GeoJSON();
var features_F35TotalRange_6 = format_F35TotalRange_6.readFeatures(json_F35TotalRange_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F35TotalRange_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_F35TotalRange_6.addFeatures(features_F35TotalRange_6);
var lyr_F35TotalRange_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_F35TotalRange_6, 
                style: style_F35TotalRange_6,
                popuplayertitle: 'F35 Total Range',
                interactive: true,
                title: '<img src="styles/legend/F35TotalRange_6.png" /> F35 Total Range'
            });
var format_F35CombatRange_7 = new ol.format.GeoJSON();
var features_F35CombatRange_7 = format_F35CombatRange_7.readFeatures(json_F35CombatRange_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F35CombatRange_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_F35CombatRange_7.addFeatures(features_F35CombatRange_7);
var lyr_F35CombatRange_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_F35CombatRange_7, 
                style: style_F35CombatRange_7,
                popuplayertitle: 'F35 Combat Range',
                interactive: true,
                title: '<img src="styles/legend/F35CombatRange_7.png" /> F35 Combat Range'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_IllustrativeUSVesselsLocation_1.setVisible(true);lyr_RooseveltRoadsNavalStation_2.setVisible(true);lyr_TomahawkRange_3.setVisible(true);lyr_FA18SHTotalRange_4.setVisible(true);lyr_FA18SHCombatRange_5.setVisible(true);lyr_F35TotalRange_6.setVisible(true);lyr_F35CombatRange_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_IllustrativeUSVesselsLocation_1,lyr_RooseveltRoadsNavalStation_2,lyr_TomahawkRange_3,lyr_FA18SHTotalRange_4,lyr_FA18SHCombatRange_5,lyr_F35TotalRange_6,lyr_F35CombatRange_7];
lyr_IllustrativeUSVesselsLocation_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'name': 'name', });
lyr_RooseveltRoadsNavalStation_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'name': 'name', });
lyr_TomahawkRange_3.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'Name': 'Name', 'Type of Range': 'Type of Range', 'Range': 'Range', 'IMG': 'IMG', 'Description': 'Description', });
lyr_FA18SHTotalRange_4.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'Name': 'Name', 'Type of Range': 'Type of Range', 'Range': 'Range', 'IMG': 'IMG', 'Description': 'Description', });
lyr_FA18SHCombatRange_5.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'Name': 'Name', 'Type of Range': 'Type of Range', 'Range': 'Range', 'IMG': 'IMG', 'Description': 'Description', });
lyr_F35TotalRange_6.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'Name': 'Name', 'Type of Range': 'Type of Range', 'Range': 'Range', 'IMG': 'IMG', 'Description': 'Description', });
lyr_F35CombatRange_7.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'Name': 'Name', 'Range': 'Range', 'IMG': 'IMG', 'Type of Range': 'Type of Range', 'Description': 'Description', });
lyr_IllustrativeUSVesselsLocation_1.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_RooseveltRoadsNavalStation_2.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_TomahawkRange_3.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'Name': 'TextEdit', 'Type of Range': 'TextEdit', 'Range': 'TextEdit', 'IMG': 'ExternalResource', 'Description': 'TextEdit', });
lyr_FA18SHTotalRange_4.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'Name': 'TextEdit', 'Type of Range': 'TextEdit', 'Range': 'TextEdit', 'IMG': 'ExternalResource', 'Description': 'TextEdit', });
lyr_FA18SHCombatRange_5.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'Name': 'TextEdit', 'Type of Range': 'TextEdit', 'Range': 'TextEdit', 'IMG': 'ExternalResource', 'Description': 'TextEdit', });
lyr_F35TotalRange_6.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'Name': 'TextEdit', 'Type of Range': 'TextEdit', 'Range': 'TextEdit', 'IMG': 'ExternalResource', 'Description': 'TextEdit', });
lyr_F35CombatRange_7.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'Name': 'TextEdit', 'Range': 'TextEdit', 'IMG': 'ExternalResource', 'Type of Range': 'TextEdit', 'Description': 'TextEdit', });
lyr_IllustrativeUSVesselsLocation_1.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'name': 'no label', });
lyr_RooseveltRoadsNavalStation_2.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'name': 'no label', });
lyr_TomahawkRange_3.set('fieldLabels', {'qc_id': 'hidden field', 'fid': 'hidden field', 'Name': 'inline label - always visible', 'Type of Range': 'no label', 'Range': 'no label', 'IMG': 'no label', 'Description': 'no label', });
lyr_FA18SHTotalRange_4.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'Name': 'inline label - always visible', 'Type of Range': 'no label', 'Range': 'no label', 'IMG': 'no label', 'Description': 'no label', });
lyr_FA18SHCombatRange_5.set('fieldLabels', {'qc_id': 'hidden field', 'fid': 'hidden field', 'Name': 'inline label - always visible', 'Type of Range': 'no label', 'Range': 'no label', 'IMG': 'no label', 'Description': 'no label', });
lyr_F35TotalRange_6.set('fieldLabels', {'qc_id': 'hidden field', 'fid': 'hidden field', 'Name': 'inline label - always visible', 'Type of Range': 'no label', 'Range': 'no label', 'IMG': 'no label', 'Description': 'no label', });
lyr_F35CombatRange_7.set('fieldLabels', {'qc_id': 'hidden field', 'fid': 'hidden field', 'Name': 'inline label - always visible', 'Range': 'no label', 'IMG': 'no label', 'Type of Range': 'no label', 'Description': 'no label', });
lyr_F35CombatRange_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});