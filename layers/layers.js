var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Светлая тема',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'Темная тема',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Железная дорога'
            });
var format_NDVI_3 = new ol.format.GeoJSON();
var features_NDVI_3 = format_NDVI_3.readFeatures(json_NDVI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_3.addFeatures(features_NDVI_3);
var lyr_NDVI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI_3, 
                style: style_NDVI_3,
                interactive: false,
                title: '<img src="styles/legend/NDVI_3.png" /> Озелененение (NDVI)'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Водные поверхности'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Районы города'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> Городская черта'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_NDVI_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr_NDVI_3,lyr__4,lyr__5,lyr__6];
lyr__2.set('fieldAliases', {'Категория': 'Категория', 'Электрификация': 'Электрификация', 'Путность': 'Путность', 'Ф_преобразования': 'Ф_преобразования', 'Этапность': 'Этапность', 'Примечание': 'Примечание', });
lyr_NDVI_3.set('fieldAliases', {'Huh': 'Huh', });
lyr__4.set('fieldAliases', {'Приме': 'Приме', });
lyr__5.set('fieldAliases', {'Наиме': 'Наиме', });
lyr__6.set('fieldAliases', {'Приме': 'Приме', });
lyr__2.set('fieldImages', {'Категория': 'TextEdit', 'Электрификация': 'TextEdit', 'Путность': 'Range', 'Ф_преобразования': 'TextEdit', 'Этапность': 'TextEdit', 'Примечание': 'TextEdit', });
lyr_NDVI_3.set('fieldImages', {'Huh': 'TextEdit', });
lyr__4.set('fieldImages', {'Приме': 'TextEdit', });
lyr__5.set('fieldImages', {'Наиме': 'TextEdit', });
lyr__6.set('fieldImages', {'Приме': 'TextEdit', });
lyr__2.set('fieldLabels', {'Категория': 'no label', 'Электрификация': 'no label', 'Путность': 'no label', 'Ф_преобразования': 'no label', 'Этапность': 'no label', 'Примечание': 'no label', });
lyr_NDVI_3.set('fieldLabels', {'Huh': 'no label', });
lyr__4.set('fieldLabels', {'Приме': 'no label', });
lyr__5.set('fieldLabels', {'Наиме': 'no label', });
lyr__6.set('fieldLabels', {'Приме': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});