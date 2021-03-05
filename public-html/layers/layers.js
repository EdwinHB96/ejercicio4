var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentosHonduras_1 = new ol.format.GeoJSON();
var features_DepartamentosHonduras_1 = format_DepartamentosHonduras_1.readFeatures(json_DepartamentosHonduras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosHonduras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosHonduras_1.addFeatures(features_DepartamentosHonduras_1);
var lyr_DepartamentosHonduras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosHonduras_1, 
                style: style_DepartamentosHonduras_1,
                interactive: true,
                title: '<img src="styles/legend/DepartamentosHonduras_1.png" /> Departamentos Honduras'
            });
var format_DepartamentodeCorts_2 = new ol.format.GeoJSON();
var features_DepartamentodeCorts_2 = format_DepartamentodeCorts_2.readFeatures(json_DepartamentodeCorts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentodeCorts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentodeCorts_2.addFeatures(features_DepartamentodeCorts_2);
var lyr_DepartamentodeCorts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentodeCorts_2, 
                style: style_DepartamentodeCorts_2,
                interactive: true,
                title: '<img src="styles/legend/DepartamentodeCorts_2.png" /> Departamento de Cortés'
            });
var format_AreasInundablesPNUD2011_3 = new ol.format.GeoJSON();
var features_AreasInundablesPNUD2011_3 = format_AreasInundablesPNUD2011_3.readFeatures(json_AreasInundablesPNUD2011_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasInundablesPNUD2011_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasInundablesPNUD2011_3.addFeatures(features_AreasInundablesPNUD2011_3);
var lyr_AreasInundablesPNUD2011_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreasInundablesPNUD2011_3, 
                style: style_AreasInundablesPNUD2011_3,
                interactive: true,
                title: '<img src="styles/legend/AreasInundablesPNUD2011_3.png" /> Areas Inundables PNUD2011'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DepartamentosHonduras_1.setVisible(true);lyr_DepartamentodeCorts_2.setVisible(true);lyr_AreasInundablesPNUD2011_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DepartamentosHonduras_1,lyr_DepartamentodeCorts_2,lyr_AreasInundablesPNUD2011_3];
lyr_DepartamentosHonduras_1.set('fieldAliases', {'COD': 'COD', 'DEPTO': 'DEPTO', 'DEP': 'DEP', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DepartamentodeCorts_2.set('fieldAliases', {'COD': 'COD', 'DEPTO': 'DEPTO', 'DEP': 'DEP', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AreasInundablesPNUD2011_3.set('fieldAliases', {'fid_clip_i': 'fid_clip_i', 'fid_angiey': 'fid_angiey', 'id': 'id', 'fid_inundi': 'fid_inundi', 'id_1': 'id_1', 'fid_depart': 'fid_depart', 'id_12': 'id_12', 'departamen': 'departamen', 'area': 'area', 'perimeter': 'perimeter', 'hectares': 'hectares', 'cod_depto': 'cod_depto', 'sex_h': 'sex_h', 'sex_m': 'sex_m', 'densi_pobl': 'densi_pobl', 'masculino': 'masculino', 'den_pobl_0': 'den_pobl_0', 'area_km': 'area_km', 'mor_brut_0': 'mor_brut_0', 'n_bru_01': 'n_bru_01', 'm_inf_01': 'm_inf_01', 'm_nnat_01': 'm_nnat_01', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_DepartamentosHonduras_1.set('fieldImages', {'COD': 'TextEdit', 'DEPTO': 'TextEdit', 'DEP': 'Range', 'CODPAIS': 'TextEdit', 'Km2': 'TextEdit', 'Densidad': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DepartamentodeCorts_2.set('fieldImages', {'COD': 'TextEdit', 'DEPTO': 'TextEdit', 'DEP': 'TextEdit', 'CODPAIS': 'TextEdit', 'Km2': 'TextEdit', 'Densidad': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AreasInundablesPNUD2011_3.set('fieldImages', {'fid_clip_i': 'TextEdit', 'fid_angiey': 'TextEdit', 'id': 'TextEdit', 'fid_inundi': 'TextEdit', 'id_1': 'TextEdit', 'fid_depart': 'TextEdit', 'id_12': 'TextEdit', 'departamen': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'hectares': 'TextEdit', 'cod_depto': 'TextEdit', 'sex_h': 'TextEdit', 'sex_m': 'TextEdit', 'densi_pobl': 'TextEdit', 'masculino': 'TextEdit', 'den_pobl_0': 'TextEdit', 'area_km': 'TextEdit', 'mor_brut_0': 'TextEdit', 'n_bru_01': 'TextEdit', 'm_inf_01': 'TextEdit', 'm_nnat_01': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_DepartamentosHonduras_1.set('fieldLabels', {'COD': 'inline label', 'DEPTO': 'inline label', 'DEP': 'inline label', 'CODPAIS': 'inline label', 'Km2': 'inline label', 'Densidad': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_DepartamentodeCorts_2.set('fieldLabels', {'COD': 'inline label', 'DEPTO': 'inline label', 'DEP': 'inline label', 'CODPAIS': 'inline label', 'Km2': 'inline label', 'Densidad': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_AreasInundablesPNUD2011_3.set('fieldLabels', {'fid_clip_i': 'inline label', 'fid_angiey': 'inline label', 'id': 'inline label', 'fid_inundi': 'inline label', 'id_1': 'inline label', 'fid_depart': 'inline label', 'id_12': 'inline label', 'departamen': 'inline label', 'area': 'inline label', 'perimeter': 'inline label', 'hectares': 'inline label', 'cod_depto': 'inline label', 'sex_h': 'inline label', 'sex_m': 'inline label', 'densi_pobl': 'inline label', 'masculino': 'inline label', 'den_pobl_0': 'inline label', 'area_km': 'inline label', 'mor_brut_0': 'inline label', 'n_bru_01': 'inline label', 'm_inf_01': 'inline label', 'm_nnat_01': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_AreasInundablesPNUD2011_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});