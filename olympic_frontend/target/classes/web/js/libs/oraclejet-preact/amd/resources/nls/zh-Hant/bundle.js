define(['exports'], (function(e){"use strict";const t={calendarDateConverter_parseError:e=>"使用如以下範例的完整日期重試: "+e.dateExample+".",chart_labelGroup:()=>"群組",chart_labelSeries:()=>"數列",chart_labelValue:()=>"值",checkboxSet_requiredMessageDetail:()=>"必要",checkbox_requiredMessageDetail:()=>"必要",close:()=>"關閉",collection_noData:()=>"沒有資料可供顯示.",collection_selectAllRows:()=>"選取所有資料列",collection_selectRow:e=>"選取 "+e.ROW_NAME+" 資料列",collection_sortDisabled:()=>"不可排序",collection_sortEnabled:()=>"可排序",confirmation:()=>"確認",dataVisualization_labelAndValue:e=>e.LABEL+": "+e.VALUE,dataVisualization_labelCountWithTotal:e=>e.itemCount+" / "+e.totalCount,dataVisualization_noData:()=>"沒有資料可供顯示",dataVisualization_stateSelected:()=>"已選取",dataVisualization_stateUnselected:()=>"已取消選取",error:()=>"錯誤",expandableList_expandCollapseInstructionText:()=>"使用方向鍵展開與收合",expandableList_groupCollapse:()=>"已收合",expandableList_groupExpand:()=>"已展開",filePicker_addFiles:()=>"新增檔案",filePicker_dropzonePrimaryText:()=>"拖放",filePicker_dropzoneSecondaryText:()=>"選取一個檔案或將一個檔案放到此處",filePicker_dropzoneSecondaryTextMultiple:()=>"選取或將檔案放到此處",filePicker_multipleFileTypeUploadError:e=>"您無法上傳以下類型的檔案: "+e.fileTypes,filePicker_singleFileUploadError:()=>"一次上傳一個檔案",filePicker_singleTypeUploadError:e=>"您無法上傳 "+e.fileType+" 類型的檔案",filePicker_unknownFileTypeUploadError:()=>"不明",formControl_clear:()=>"清除",formControl_day:()=>"日",formControl_helpAvailable:()=>"提供說明",formControl_limitReached:e=>"您已達到 "+({one:"1 個字元"}[new Intl.PluralRules("zh-Hant").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("zh-Hant").format(e.CHARACTER_LIMIT)+" 個字元")+"的限制.",formControl_loading:()=>"載入中",formControl_maxLengthExceeded:e=>"超過長度上限 "+e.MAX_LENGTH+".",formControl_maxLengthRemaining:e=>"還有 "+e.CHARACTER_COUNT+" 個字元.",formControl_month:()=>"月",formControl_readOnly:()=>"唯讀",formControl_requiredMessageDetail:()=>"輸入值.",formControl_year:()=>"年",gantt_labelDate:()=>"日期",gantt_labelEnd:()=>"結束",gantt_labelLabel:()=>"標籤",gantt_labelRow:()=>"資料列",gantt_labelStart:()=>"開始",indexer_disabledLabel:e=>e.SECTION+". 找不到符合的區段.",indexer_keyboardInstructionText:()=>"按 Enter 鍵以選取值.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"在 "+e.FROM_SECTION+" 到 "+e.TO_SECTION+" 之間.",indexer_touchInstructionText:()=>"點兩下並按住以進入手勢模式, 您可以上下拖曳來調整值.",info:()=>"資訊",inputDateMask_date_cleared:()=>"已清除日期",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"空的",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"yyyy",inputNumber_converterParseError:()=>"輸入一個數字.",inputNumber_decrease:()=>"減少",inputNumber_increase:()=>"增加",inputPassword_hidden:()=>"已隱藏密碼",inputPassword_hide:()=>"隱藏密碼",inputPassword_show:()=>"顯示密碼",list_suggestion:()=>"建議",messageToast_allMessagesClosed:()=>"所有通知訊息都已關閉.",message_close:()=>"關閉",message_confirmation:()=>"成功",message_error:()=>"錯誤",message_info:()=>"資訊",message_navigationFromMessagesRegion:()=>"進入訊息區域. 按 F6 即可回到先前聚焦的元素.",message_navigationToMessagesRegion:()=>"訊息區域有新的訊息. 按 F6 即可瀏覽至最新的訊息區域.",message_warning:()=>"警告",noData_message:()=>"沒有可顯示的項目",overflowItemLabel:()=>"其他頁籤",plural_separator:()=>", ",progressIndeterminate:()=>"進行中",radio_helpForRadio:()=>"圓鈕說明",radio_requiredMessageDetail:()=>"選取一個值.",selectMultiple_apply:()=>"套用",selectMultiple_back:()=>"上一步",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_removeSelectedTagInstructionText:()=>"按 Backspace 鍵或 Delete 鍵可移除選取的值.",selectMultiple_selectedValues:()=>"選取的值",selectMultiple_showSelectedValues:()=>"僅顯示選取的值.",selectMultiple_valuesSelected:e=>"已選取 "+e.VALUE_COUNT+" 個值.",select_addToList:()=>"新增至清單",select_addToListAvailable:()=>"新增至清單可供使用",select_moreSearchOptions:()=>"其他搜尋選項",select_moreSearchOptionsAvailable:()=>"其他搜尋選項可供使用",select_noMatchesFound:()=>"找不到相符項目.",select_oneMatchFound:()=>"找到一個相符項目",select_requiredMessageDetail:()=>"選取一個值.",select_sizeMatchesFound:e=>"找到 "+e.TOTAL_SIZE+" 個相符項目",select_sizeOrMoreMatchesFound:e=>"找到 "+e.TOTAL_SIZE+" 個以上的相符項目",selector_selected:()=>"已勾選核取方塊",selector_unselected:()=>"未勾選核取方塊",tabBarNavigationList_removeCueText:()=>"可移除",timeComponent_tooltipZoomIn:()=>"放大",timeComponent_tooltipZoomOut:()=>"縮小",train_current:()=>"目前",train_message_type:()=>"訊息類型",train_not_visited:()=>"未瀏覽",train_status:e=>"第 "+e.currentStep+" / "+e.numberOfSteps+" 個步驟",train_visited:()=>"已瀏覽",userAssistance_learnMore:()=>"進一步瞭解",userAssistance_required:()=>"必要",viz_drillable:()=>"可展開",warn:()=>"警告"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
