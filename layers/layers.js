var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bagmati_1 = new ol.format.GeoJSON();
var features_Bagmati_1 = format_Bagmati_1.readFeatures(json_Bagmati_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bagmati_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bagmati_1.addFeatures(features_Bagmati_1);
var lyr_Bagmati_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bagmati_1, 
                style: style_Bagmati_1,
                popuplayertitle: 'Bagmati',
                interactive: false,
                title: '<img src="styles/legend/Bagmati_1.png" /> Bagmati'
            });
var format_ArmyCOB_2 = new ol.format.GeoJSON();
var features_ArmyCOB_2 = format_ArmyCOB_2.readFeatures(json_ArmyCOB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmyCOB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmyCOB_2.addFeatures(features_ArmyCOB_2);
var lyr_ArmyCOB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmyCOB_2, 
                style: style_ArmyCOB_2,
                popuplayertitle: 'Army COB',
                interactive: true,
                title: '<img src="styles/legend/ArmyCOB_2.png" /> Army COB'
            });
var format_ArmyPOB_3 = new ol.format.GeoJSON();
var features_ArmyPOB_3 = format_ArmyPOB_3.readFeatures(json_ArmyPOB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmyPOB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmyPOB_3.addFeatures(features_ArmyPOB_3);
var lyr_ArmyPOB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmyPOB_3, 
                style: style_ArmyPOB_3,
                popuplayertitle: 'Army POB',
                interactive: true,
                title: '<img src="styles/legend/ArmyPOB_3.png" /> Army POB'
            });
var format_NepalpoliceMobile_4 = new ol.format.GeoJSON();
var features_NepalpoliceMobile_4 = format_NepalpoliceMobile_4.readFeatures(json_NepalpoliceMobile_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NepalpoliceMobile_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NepalpoliceMobile_4.addFeatures(features_NepalpoliceMobile_4);
var lyr_NepalpoliceMobile_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NepalpoliceMobile_4, 
                style: style_NepalpoliceMobile_4,
                popuplayertitle: 'Nepal police Mobile',
                interactive: true,
                title: '<img src="styles/legend/NepalpoliceMobile_4.png" /> Nepal police Mobile'
            });
var format_NepalpoliceMobileStriking_5 = new ol.format.GeoJSON();
var features_NepalpoliceMobileStriking_5 = format_NepalpoliceMobileStriking_5.readFeatures(json_NepalpoliceMobileStriking_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NepalpoliceMobileStriking_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NepalpoliceMobileStriking_5.addFeatures(features_NepalpoliceMobileStriking_5);
var lyr_NepalpoliceMobileStriking_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NepalpoliceMobileStriking_5, 
                style: style_NepalpoliceMobileStriking_5,
                popuplayertitle: 'Nepal police Mobile Striking',
                interactive: true,
                title: '<img src="styles/legend/NepalpoliceMobileStriking_5.png" /> Nepal police Mobile Striking'
            });
var format_ElectionChiefOfficer_6 = new ol.format.GeoJSON();
var features_ElectionChiefOfficer_6 = format_ElectionChiefOfficer_6.readFeatures(json_ElectionChiefOfficer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectionChiefOfficer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectionChiefOfficer_6.addFeatures(features_ElectionChiefOfficer_6);
var lyr_ElectionChiefOfficer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectionChiefOfficer_6, 
                style: style_ElectionChiefOfficer_6,
                popuplayertitle: 'Election Chief Officer',
                interactive: true,
                title: '<img src="styles/legend/ElectionChiefOfficer_6.png" /> Election Chief Officer'
            });
var format_Districtelectionofficer_7 = new ol.format.GeoJSON();
var features_Districtelectionofficer_7 = format_Districtelectionofficer_7.readFeatures(json_Districtelectionofficer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districtelectionofficer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtelectionofficer_7.addFeatures(features_Districtelectionofficer_7);
var lyr_Districtelectionofficer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districtelectionofficer_7, 
                style: style_Districtelectionofficer_7,
                popuplayertitle: 'District election officer',
                interactive: true,
                title: '<img src="styles/legend/Districtelectionofficer_7.png" /> District election officer'
            });
var format_ElectionOfficer_8 = new ol.format.GeoJSON();
var features_ElectionOfficer_8 = format_ElectionOfficer_8.readFeatures(json_ElectionOfficer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectionOfficer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectionOfficer_8.addFeatures(features_ElectionOfficer_8);
var lyr_ElectionOfficer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectionOfficer_8, 
                style: style_ElectionOfficer_8,
                popuplayertitle: 'Election Officer',
                interactive: true,
                title: '<img src="styles/legend/ElectionOfficer_8.png" /> Election Officer'
            });
var format_Elecationsecuritybase_9 = new ol.format.GeoJSON();
var features_Elecationsecuritybase_9 = format_Elecationsecuritybase_9.readFeatures(json_Elecationsecuritybase_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elecationsecuritybase_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elecationsecuritybase_9.addFeatures(features_Elecationsecuritybase_9);
var lyr_Elecationsecuritybase_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elecationsecuritybase_9, 
                style: style_Elecationsecuritybase_9,
                popuplayertitle: 'Elecation security base',
                interactive: true,
                title: '<img src="styles/legend/Elecationsecuritybase_9.png" /> Elecation security base'
            });
var format_Mobile_10 = new ol.format.GeoJSON();
var features_Mobile_10 = format_Mobile_10.readFeatures(json_Mobile_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mobile_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mobile_10.addFeatures(features_Mobile_10);
var lyr_Mobile_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mobile_10, 
                style: style_Mobile_10,
                popuplayertitle: 'Mobile',
                interactive: true,
                title: '<img src="styles/legend/Mobile_10.png" /> Mobile'
            });
var format_Striking_11 = new ol.format.GeoJSON();
var features_Striking_11 = format_Striking_11.readFeatures(json_Striking_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Striking_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Striking_11.addFeatures(features_Striking_11);
var lyr_Striking_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Striking_11, 
                style: style_Striking_11,
                popuplayertitle: 'Striking',
                interactive: true,
                title: '<img src="styles/legend/Striking_11.png" /> Striking'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bagmati_1.setVisible(true);lyr_ArmyCOB_2.setVisible(true);lyr_ArmyPOB_3.setVisible(true);lyr_NepalpoliceMobile_4.setVisible(true);lyr_NepalpoliceMobileStriking_5.setVisible(true);lyr_ElectionChiefOfficer_6.setVisible(true);lyr_Districtelectionofficer_7.setVisible(true);lyr_ElectionOfficer_8.setVisible(true);lyr_Elecationsecuritybase_9.setVisible(true);lyr_Mobile_10.setVisible(true);lyr_Striking_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bagmati_1,lyr_ArmyCOB_2,lyr_ArmyPOB_3,lyr_NepalpoliceMobile_4,lyr_NepalpoliceMobileStriking_5,lyr_ElectionChiefOfficer_6,lyr_Districtelectionofficer_7,lyr_ElectionOfficer_8,lyr_Elecationsecuritybase_9,lyr_Mobile_10,lyr_Striking_11];
lyr_Bagmati_1.set('fieldAliases', {'DCODE': 'DCODE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'AREA_SQKM': 'AREA_SQKM', 'PERIMETER': 'PERIMETER', });
lyr_ArmyCOB_2.set('fieldAliases', {'सि.नं': 'सि.नं', 'जिल्ला': 'जिल्ला', 'खटिने युनिट नाम': 'खटिने युनिट नाम', 'निर्वाचन क्षेत्र': 'निर्वाचन क्षेत्र', 'स्थान': 'स्थान', 'जिम्मेवारी ईलाका': 'जिम्मेवारी ईलाका', 'कमाण्डर': 'कमाण्डर', 'नफ्री': 'नफ्री', 'सम्पर्क नं .': 'सम्पर्क नं .', 'X': 'X', 'Y': 'Y', });
lyr_ArmyPOB_3.set('fieldAliases', {'सि.नं': 'सि.नं', 'जिल्ला': 'जिल्ला', 'खटिने युनिट नाम': 'खटिने युनिट नाम', 'निर्वाचन क्षेत्र': 'निर्वाचन क्षेत्र', 'स्थान': 'स्थान', 'जिम्मेवारी ईलाका': 'जिम्मेवारी ईलाका', 'कमाण्डर': 'कमाण्डर', 'नफ्री': 'नफ्री', 'सम्पर्क नं .': 'सम्पर्क नं .', 'X': 'X', 'Y': 'Y', });
lyr_NepalpoliceMobile_4.set('fieldAliases', {'सि.नं': 'सि.नं', 'जिल्ला': 'जिल्ला', 'खटिने युनिट नाम': 'खटिने युनिट नाम', 'निर्वाचन क्षेत्र': 'निर्वाचन क्षेत्र', 'स्थान': 'स्थान', 'जिम्मेवारी ईलाका': 'जिम्मेवारी ईलाका', 'कमाण्डर': 'कमाण्डर', 'नफ्री': 'नफ्री', 'सम्पर्क नं .': 'सम्पर्क नं .', 'X': 'X', 'Y': 'Y', });
lyr_NepalpoliceMobileStriking_5.set('fieldAliases', {'सि.नं': 'सि.नं', 'जिल्ला': 'जिल्ला', 'खटिने युनिट नाम': 'खटिने युनिट नाम', 'निर्वाचन क्षेत्र': 'निर्वाचन क्षेत्र', 'स्थान': 'स्थान', 'जिम्मेवारी ईलाका': 'जिम्मेवारी ईलाका', 'कमाण्डर': 'कमाण्डर', 'नफ्री': 'नफ्री', 'सम्पर्क नं .': 'सम्पर्क नं .', 'X': 'X', 'Y': 'Y', });
lyr_ElectionChiefOfficer_6.set('fieldAliases', {'जिल्ला': 'जिल्ला', 'क्षेत्र': 'क्षेत्र', 'स्थान': 'स्थान', 'प्रमुख निर्वाचन अधिकृत': 'प्रमुख निर्वाचन अधिकृत', 'मोबाइल': 'मोबाइल', 'सशस्त्र प्रहरी बल': 'सशस्त्र प्रहरी बल', 'मोबाइल_1': 'मोबाइल_1', 'X': 'X', 'Y': 'Y', });
lyr_Districtelectionofficer_7.set('fieldAliases', {'जिल्ला': 'जिल्ला', 'स्थान': 'स्थान', 'जिल्ला निर्वाचन अधिकृत': 'जिल्ला निर्वाचन अधिकृत', 'मोबाइल': 'मोबाइल', 'सशस्त्र प्रहरी बल': 'सशस्त्र प्रहरी बल', 'मोबाइल_1': 'मोबाइल_1', 'X': 'X', 'Y': 'Y', });
lyr_ElectionOfficer_8.set('fieldAliases', {'सिन': 'सिन', 'जिल्ला': 'जिल्ला', 'क्षेत्र': 'क्षेत्र', 'स्थान': 'स्थान', 'निर्वाचन अधिकृत': 'निर्वाचन अधिकृत', 'मोबाइल': 'मोबाइल', 'सशस्त्र प्रहरी बल': 'सशस्त्र प्रहरी बल', 'मोबाइल_1': 'मोबाइल_1', 'X': 'X', 'Y': 'Y', });
lyr_Elecationsecuritybase_9.set('fieldAliases', {'सि.नं.': 'सि.नं.', 'प्रदेश': 'प्रदेश', 'जिल्ला': 'जिल्ला', 'नि.क्षेत्र नं.': 'नि.क्षेत्र नं.', 'निर्वाचन सुरक्षा बेश बसेको स्थान': 'निर्वाचन सुरक्षा बेश बसेको स्थान', 'खटाउने युनिट': 'खटाउने युनिट', 'जिल्ला कमाण्ड गर्ने युनिटबाट बेश सम्मको दुरी': 'जिल्ला कमाण्ड गर्ने युनिटबाट बेश सम्मको दुरी', 'दर्जा': 'दर्जा', 'नाम थर': 'नाम थर', 'सम्पर्क नं.': 'सम्पर्क नं.', 'नफ्री': 'नफ्री', 'x': 'x', 'y': 'y', });
lyr_Mobile_10.set('fieldAliases', {'sn': 'sn', 'जिल्ला': 'जिल्ला', 'खटिने युनिट': 'खटिने युनिट', 'निर्वाचन क्षेत्र': 'निर्वाचन क्षेत्र', 'स्थान': 'स्थान', 'जिम्मेवारी ईलाका': 'जिम्मेवारी ईलाका', 'कमाण्डर': 'कमाण्डर', 'नफ्री': 'नफ्री', 'सम्पर्क नं .': 'सम्पर्क नं .', 'X': 'X', 'Y': 'Y', });
lyr_Striking_11.set('fieldAliases', {'sn': 'sn', 'जिल्ला': 'जिल्ला', 'खटिने युनिट': 'खटिने युनिट', 'निर्वाचन क्षेत्र': 'निर्वाचन क्षेत्र', 'स्थान': 'स्थान', 'जिम्मेवारी ईलाका': 'जिम्मेवारी ईलाका', 'कमाण्डर': 'कमाण्डर', 'नफ्री': 'नफ्री', 'सम्पर्क नं .': 'सम्पर्क नं .', 'X': 'X', 'Y': 'Y', });
lyr_Bagmati_1.set('fieldImages', {'DCODE': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE_CODE': 'TextEdit', 'AREA_SQKM': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_ArmyCOB_2.set('fieldImages', {'सि.नं': 'Range', 'जिल्ला': 'TextEdit', 'खटिने युनिट नाम': 'TextEdit', 'निर्वाचन क्षेत्र': 'TextEdit', 'स्थान': 'TextEdit', 'जिम्मेवारी ईलाका': 'TextEdit', 'कमाण्डर': 'TextEdit', 'नफ्री': 'TextEdit', 'सम्पर्क नं .': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ArmyPOB_3.set('fieldImages', {'सि.नं': 'Range', 'जिल्ला': 'TextEdit', 'खटिने युनिट नाम': 'TextEdit', 'निर्वाचन क्षेत्र': 'TextEdit', 'स्थान': 'TextEdit', 'जिम्मेवारी ईलाका': 'TextEdit', 'कमाण्डर': 'TextEdit', 'नफ्री': 'Range', 'सम्पर्क नं .': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_NepalpoliceMobile_4.set('fieldImages', {'सि.नं': 'Range', 'जिल्ला': 'TextEdit', 'खटिने युनिट नाम': 'TextEdit', 'निर्वाचन क्षेत्र': 'TextEdit', 'स्थान': 'TextEdit', 'जिम्मेवारी ईलाका': 'TextEdit', 'कमाण्डर': 'TextEdit', 'नफ्री': 'TextEdit', 'सम्पर्क नं .': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_NepalpoliceMobileStriking_5.set('fieldImages', {'सि.नं': 'Range', 'जिल्ला': 'TextEdit', 'खटिने युनिट नाम': 'TextEdit', 'निर्वाचन क्षेत्र': 'TextEdit', 'स्थान': 'TextEdit', 'जिम्मेवारी ईलाका': 'TextEdit', 'कमाण्डर': 'TextEdit', 'नफ्री': 'Range', 'सम्पर्क नं .': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ElectionChiefOfficer_6.set('fieldImages', {'जिल्ला': 'TextEdit', 'क्षेत्र': 'Range', 'स्थान': 'TextEdit', 'प्रमुख निर्वाचन अधिकृत': 'TextEdit', 'मोबाइल': 'TextEdit', 'सशस्त्र प्रहरी बल': 'TextEdit', 'मोबाइल_1': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Districtelectionofficer_7.set('fieldImages', {'जिल्ला': 'TextEdit', 'स्थान': 'TextEdit', 'जिल्ला निर्वाचन अधिकृत': 'TextEdit', 'मोबाइल': 'TextEdit', 'सशस्त्र प्रहरी बल': 'TextEdit', 'मोबाइल_1': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ElectionOfficer_8.set('fieldImages', {'सिन': 'Range', 'जिल्ला': 'TextEdit', 'क्षेत्र': 'Range', 'स्थान': 'TextEdit', 'निर्वाचन अधिकृत': 'TextEdit', 'मोबाइल': 'TextEdit', 'सशस्त्र प्रहरी बल': 'TextEdit', 'मोबाइल_1': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Elecationsecuritybase_9.set('fieldImages', {'सि.नं.': 'TextEdit', 'प्रदेश': 'TextEdit', 'जिल्ला': 'TextEdit', 'नि.क्षेत्र नं.': 'TextEdit', 'निर्वाचन सुरक्षा बेश बसेको स्थान': 'TextEdit', 'खटाउने युनिट': 'TextEdit', 'जिल्ला कमाण्ड गर्ने युनिटबाट बेश सम्मको दुरी': 'TextEdit', 'दर्जा': 'TextEdit', 'नाम थर': 'TextEdit', 'सम्पर्क नं.': 'TextEdit', 'नफ्री': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Mobile_10.set('fieldImages', {'sn': 'Range', 'जिल्ला': 'TextEdit', 'खटिने युनिट': 'TextEdit', 'निर्वाचन क्षेत्र': 'TextEdit', 'स्थान': 'TextEdit', 'जिम्मेवारी ईलाका': 'TextEdit', 'कमाण्डर': 'TextEdit', 'नफ्री': 'TextEdit', 'सम्पर्क नं .': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Striking_11.set('fieldImages', {'sn': 'TextEdit', 'जिल्ला': 'TextEdit', 'खटिने युनिट': 'TextEdit', 'निर्वाचन क्षेत्र': 'TextEdit', 'स्थान': 'TextEdit', 'जिम्मेवारी ईलाका': 'TextEdit', 'कमाण्डर': 'TextEdit', 'नफ्री': 'TextEdit', 'सम्पर्क नं .': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Bagmati_1.set('fieldLabels', {'DCODE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'AREA_SQKM': 'no label', 'PERIMETER': 'no label', });
lyr_ArmyCOB_2.set('fieldLabels', {'सि.नं': 'hidden field', 'जिल्ला': 'inline label - always visible', 'खटिने युनिट नाम': 'inline label - always visible', 'निर्वाचन क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिम्मेवारी ईलाका': 'inline label - always visible', 'कमाण्डर': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'सम्पर्क नं .': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_ArmyPOB_3.set('fieldLabels', {'सि.नं': 'hidden field', 'जिल्ला': 'inline label - always visible', 'खटिने युनिट नाम': 'inline label - always visible', 'निर्वाचन क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिम्मेवारी ईलाका': 'inline label - always visible', 'कमाण्डर': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'सम्पर्क नं .': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_NepalpoliceMobile_4.set('fieldLabels', {'सि.नं': 'hidden field', 'जिल्ला': 'inline label - always visible', 'खटिने युनिट नाम': 'inline label - always visible', 'निर्वाचन क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिम्मेवारी ईलाका': 'inline label - always visible', 'कमाण्डर': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'सम्पर्क नं .': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_NepalpoliceMobileStriking_5.set('fieldLabels', {'सि.नं': 'hidden field', 'जिल्ला': 'inline label - always visible', 'खटिने युनिट नाम': 'inline label - always visible', 'निर्वाचन क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिम्मेवारी ईलाका': 'inline label - always visible', 'कमाण्डर': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'सम्पर्क नं .': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_ElectionChiefOfficer_6.set('fieldLabels', {'जिल्ला': 'hidden field', 'क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'प्रमुख निर्वाचन अधिकृत': 'inline label - always visible', 'मोबाइल': 'inline label - always visible', 'सशस्त्र प्रहरी बल': 'inline label - always visible', 'मोबाइल_1': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_Districtelectionofficer_7.set('fieldLabels', {'जिल्ला': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिल्ला निर्वाचन अधिकृत': 'inline label - always visible', 'मोबाइल': 'inline label - always visible', 'सशस्त्र प्रहरी बल': 'inline label - always visible', 'मोबाइल_1': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_ElectionOfficer_8.set('fieldLabels', {'सिन': 'hidden field', 'जिल्ला': 'inline label - always visible', 'क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'निर्वाचन अधिकृत': 'inline label - always visible', 'मोबाइल': 'inline label - always visible', 'सशस्त्र प्रहरी बल': 'inline label - always visible', 'मोबाइल_1': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_Elecationsecuritybase_9.set('fieldLabels', {'सि.नं.': 'hidden field', 'प्रदेश': 'inline label - always visible', 'जिल्ला': 'inline label - always visible', 'नि.क्षेत्र नं.': 'inline label - always visible', 'निर्वाचन सुरक्षा बेश बसेको स्थान': 'inline label - always visible', 'खटाउने युनिट': 'inline label - always visible', 'जिल्ला कमाण्ड गर्ने युनिटबाट बेश सम्मको दुरी': 'inline label - always visible', 'दर्जा': 'inline label - always visible', 'नाम थर': 'inline label - always visible', 'सम्पर्क नं.': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'x': 'no label', 'y': 'no label', });
lyr_Mobile_10.set('fieldLabels', {'sn': 'hidden field', 'जिल्ला': 'inline label - always visible', 'खटिने युनिट': 'inline label - always visible', 'निर्वाचन क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिम्मेवारी ईलाका': 'inline label - always visible', 'कमाण्डर': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'सम्पर्क नं .': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_Striking_11.set('fieldLabels', {'sn': 'hidden field', 'जिल्ला': 'inline label - visible with data', 'खटिने युनिट': 'inline label - always visible', 'निर्वाचन क्षेत्र': 'inline label - always visible', 'स्थान': 'inline label - always visible', 'जिम्मेवारी ईलाका': 'inline label - always visible', 'कमाण्डर': 'inline label - always visible', 'नफ्री': 'inline label - always visible', 'सम्पर्क नं .': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_Striking_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});