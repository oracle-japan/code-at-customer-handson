define(['exports'], (function(e){"use strict";const a={calendarDateConverter_parseError:e=>"Şunun gibi tamamlanmış bir tarih kullanarak yeniden deneyin: "+e.dateExample+".",chart_labelGroup:()=>"Grup",chart_labelSeries:()=>"Seri",chart_labelValue:()=>"Değer",checkboxSet_requiredMessageDetail:()=>"Gerekli",checkbox_requiredMessageDetail:()=>"Gerekli",close:()=>"Kapat",collection_noData:()=>"Görüntülenecek veri yok.",collection_selectAllRows:()=>"Tüm satırları seç",collection_selectRow:e=>e.ROW_NAME+" satırını seç",collection_sortDisabled:()=>"Sıralanabilir değil",collection_sortEnabled:()=>"Sıralanabilir",confirmation:()=>"Teyit",dataVisualization_labelAndValue:e=>e.LABEL+": "+e.VALUE,dataVisualization_labelCountWithTotal:e=>e.itemCount+"/"+e.totalCount,dataVisualization_noData:()=>"Görüntülenecek veri yok",dataVisualization_stateSelected:()=>"Seçildi",dataVisualization_stateUnselected:()=>"Seçim Kaldırıldı",error:()=>"Hata",expandableList_expandCollapseInstructionText:()=>"Genişletmek ve daraltmak için ok tuşlarını kullanın",expandableList_groupCollapse:()=>"Daraltıldı",expandableList_groupExpand:()=>"Genişletildi",filePicker_addFiles:()=>"Dosya Ekle",filePicker_dropzonePrimaryText:()=>"Sürükle ve Bırak",filePicker_dropzoneSecondaryText:()=>"Bir dosya seçin veya buraya bir dosya bırakın",filePicker_dropzoneSecondaryTextMultiple:()=>"Dosya seçin veya buraya bırakın",filePicker_multipleFileTypeUploadError:e=>"Karşıya yükleyemeyeceğiniz dosya tipleri: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Bir seferde karşıya bir tek dosya yükleyin",filePicker_singleTypeUploadError:e=>"Karşıya yükleyemeyeceğiniz dosya tipi: "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"bilinmeyen",formControl_clear:()=>"Temizle",formControl_day:()=>"Gün",formControl_helpAvailable:()=>"Yardım mevcut",formControl_limitReached:e=>(({one:"1 karakter"}[new Intl.PluralRules("tr").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("tr").format(e.CHARACTER_LIMIT)+" karakter")+" sınırına ulaştınız."),formControl_loading:()=>"Yükleniyor ",formControl_maxLengthExceeded:e=>e.MAX_LENGTH+" olan maksimum uzunluk aşıldı.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" karakter kaldı.",formControl_month:()=>"Ay",formControl_readOnly:()=>"Salt okunur",formControl_requiredMessageDetail:()=>"Bir değer girin.",formControl_year:()=>"Yıl",gantt_labelDate:()=>"Tarih",gantt_labelEnd:()=>"Bitiş",gantt_labelLabel:()=>"Etiket",gantt_labelRow:()=>"Satır",gantt_labelStart:()=>"Başlangıç",indexer_disabledLabel:e=>e.SECTION+". Eşleşen bölüm bulunamadı.",indexer_keyboardInstructionText:()=>"Değer seçmek için Enter tuşuna basın.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>e.FROM_SECTION+" ve "+e.TO_SECTION+" arasında.",indexer_touchInstructionText:()=>"İşaret moduna girmek için çıft tıklayıp basılı tutun, ardından aşağı veya yukarı sürükleyerek değeri ayarlayın.",info:()=>"Bilgi",inputDateMask_date_cleared:()=>"Tarih temizlendi",inputDateMask_dayPlaceholder:()=>"gg",inputDateMask_empty_segment:()=>"Boş",inputDateMask_monthPlaceholder:()=>"aa",inputDateMask_yearPlaceholder:()=>"yyyy",inputNumber_converterParseError:()=>"Sayı girin.",inputNumber_decrease:()=>"Azalt",inputNumber_increase:()=>"Arttır",inputPassword_hidden:()=>"Parola Gizli",inputPassword_hide:()=>"Parolayı Gizle",inputPassword_show:()=>"Parolayı Göster",list_suggestion:()=>"Öneri",messageToast_allMessagesClosed:()=>"Tüm durum mesajları kapatıldı.",message_close:()=>"Kapat",message_confirmation:()=>"Başarılı",message_error:()=>"Hata",message_info:()=>"Bilgi",message_navigationFromMessagesRegion:()=>"Mesajlar bölgesine giriliyor. Önceki odaklanılan öğeye gitmek için F6 tuşuna basın.",message_navigationToMessagesRegion:()=>"Mesajlar bölgesinde yeni mesajlar var. En yeni mesaj bölgesine F6 tuşuna basın.",message_warning:()=>"Uyarı",noData_message:()=>"Görüntülenecek öğe yok",overflowItemLabel:()=>"Diğer Sekmeler",plural_separator:()=>", ",progressIndeterminate:()=>"Devam Ediyor",radio_helpForRadio:()=>"Radyo düğmesi yardımı",radio_requiredMessageDetail:()=>"Bir değer seçin.",selectMultiple_apply:()=>"Uygula",selectMultiple_back:()=>"Geri",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_removeSelectedTagInstructionText:()=>"Seçili değeri kaldırmak için Geri veya Sil tuşuna basın.",selectMultiple_selectedValues:()=>"Seçili değerler",selectMultiple_showSelectedValues:()=>"Sadece seçili değerleri göster.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" değer seçili.",select_addToList:()=>"Listeye ekle",select_addToListAvailable:()=>"Kullanılabilir listeye ekle",select_moreSearchOptions:()=>"Diğer arama seçenekleri",select_moreSearchOptionsAvailable:()=>"Diğer kullanılabilir arama seçenekleri",select_noMatchesFound:()=>"Eşleşme bulunmadı.",select_oneMatchFound:()=>"Bir eşleşme bulundu",select_requiredMessageDetail:()=>"Bir değer seçin.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" eşleşme bulundu",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" veya daha fazla eşleşme bulundu",selector_selected:()=>"Onay kutusu işaretli",selector_unselected:()=>"Onay kutusu işaretli değil",tabBarNavigationList_removeCueText:()=>"Kaldırılabilir",timeComponent_tooltipZoomIn:()=>"Yakınlaştır",timeComponent_tooltipZoomOut:()=>"Uzaklaştır",train_current:()=>"Geçerli",train_message_type:()=>"Mesaj Tipi",train_not_visited:()=>"Ziyaret edilmedi",train_status:e=>"Adım "+e.currentStep+" / "+e.numberOfSteps,train_visited:()=>"Ziyaret edildi",userAssistance_learnMore:()=>"Daha fazla bilgi edinin",userAssistance_required:()=>"Gerekli",viz_drillable:()=>"Detaylandırılabilir",warn:()=>"Uyarı"};e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
