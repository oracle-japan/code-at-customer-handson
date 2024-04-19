define(['exports'], (function(e){"use strict";const t={calendarDateConverter_parseError:e=>"Prøv på nytt med en fullstendig dato som dette: "+e.dateExample+".",chart_labelGroup:()=>"Gruppe",chart_labelSeries:()=>"Serie",chart_labelValue:()=>"Verdi",checkboxSet_requiredMessageDetail:()=>"Nødvendig",checkbox_requiredMessageDetail:()=>"Nødvendig",close:()=>"Lukk",collection_noData:()=>"Ingen data å vise.",collection_selectAllRows:()=>"Velg alle rader",collection_selectRow:e=>"Velg raden "+e.ROW_NAME,collection_sortDisabled:()=>"Ikke sorterbar",collection_sortEnabled:()=>"Sorterbar",confirmation:()=>"Bekreftelse",dataVisualization_labelAndValue:e=>e.LABEL+": "+e.VALUE,dataVisualization_labelCountWithTotal:e=>e.itemCount+" av "+e.totalCount,dataVisualization_noData:()=>"Ingen data å vise",dataVisualization_stateSelected:()=>"Valgt",dataVisualization_stateUnselected:()=>"Ikke valgt",error:()=>"Feil",expandableList_expandCollapseInstructionText:()=>"Bruk piltastene for å utvide og trekke sammen",expandableList_groupCollapse:()=>"Sammentrukket",expandableList_groupExpand:()=>"Utvidet",filePicker_addFiles:()=>"Legg til filer",filePicker_dropzonePrimaryText:()=>"Dra og slipp",filePicker_dropzoneSecondaryText:()=>"Velg en fil, eller slipp en fil her",filePicker_dropzoneSecondaryTextMultiple:()=>"Velg eller slipp filer her",filePicker_multipleFileTypeUploadError:e=>"Du kan ikke laste filer av følgende typer: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Last én fil om gangen",filePicker_singleTypeUploadError:e=>"Du kan ikke laste filer av typen "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"ukjent",formControl_clear:()=>"Nullstill",formControl_day:()=>"Dag",formControl_helpAvailable:()=>"Hjelp – tilgjengelig",formControl_limitReached:e=>"Du har nådd grensen på "+({one:"1 tegn"}[new Intl.PluralRules("no").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("no").format(e.CHARACTER_LIMIT)+" tegn")+".",formControl_loading:()=>"Laster",formControl_maxLengthExceeded:e=>"Maksimumslengden, "+e.MAX_LENGTH+", er overskredet.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" tegn igjen.",formControl_month:()=>"Måned",formControl_readOnly:()=>"Skrivebeskyttet",formControl_requiredMessageDetail:()=>"Angi en verdi.",formControl_year:()=>"År",gantt_labelDate:()=>"Dato",gantt_labelEnd:()=>"Slutt",gantt_labelLabel:()=>"Etikett",gantt_labelRow:()=>"Rad",gantt_labelStart:()=>"Start",indexer_disabledLabel:e=>e.SECTION+". Finner ingen samsvarende seksjon.",indexer_keyboardInstructionText:()=>"Trykk på Enter hvis du vil velge verdien.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Mellom "+e.FROM_SECTION+" og "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Dobbelttrykk og hold, slik at bevegelsesmodus aktiveres, og dra deretter opp og ned hvis du vil justere verdien.",info:()=>"Opplysninger",inputDateMask_date_cleared:()=>"Dato nullstilt",inputDateMask_dayPlaceholder:()=>"dd",inputDateMask_empty_segment:()=>"Tomt",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"åååå",inputNumber_converterParseError:()=>"Angi et tall.",inputNumber_decrease:()=>"Reduser",inputNumber_increase:()=>"Øk",inputPassword_hidden:()=>"Passord skjult",inputPassword_hide:()=>"Skjul passord",inputPassword_show:()=>"Vis passord",list_suggestion:()=>"Forslag",messageToast_allMessagesClosed:()=>"Alle sprettoppvarsler er lukket.",message_close:()=>"Lukk",message_confirmation:()=>"Vellykket",message_error:()=>"Feil",message_info:()=>"Opplysninger",message_navigationFromMessagesRegion:()=>"Åpner meldingsområde. Trykk på F6 hvis du vil navigere tilbake til tidligere fokusert element.",message_navigationToMessagesRegion:()=>"Meldingsområdet inneholder nye meldinger. Trykk på F6 hvis du vil navigere til de nyeste meldingene.",message_warning:()=>"Advarsel",noData_message:()=>"Ingen elementer å vise",overflowItemLabel:()=>"Flere faner",plural_separator:()=>", ",progressIndeterminate:()=>"Pågår",radio_helpForRadio:()=>"Hjelp for alternativknapp",radio_requiredMessageDetail:()=>"Velg en verdi.",selectMultiple_apply:()=>"Bruk",selectMultiple_back:()=>"Tilbake",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_removeSelectedTagInstructionText:()=>"Trykk på Tilbake-tasten eller slettetasten hvis du vil fjerne den valgte verdien.",selectMultiple_selectedValues:()=>"Valgte verdier",selectMultiple_showSelectedValues:()=>"Vis bare valgte verdier.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" verdier er valgt.",select_addToList:()=>"Legg til i liste",select_addToListAvailable:()=>"Legg til i liste – tilgjengelig",select_moreSearchOptions:()=>"Flere søkevalg",select_moreSearchOptionsAvailable:()=>"Flere søkevalg – tilgjengelig",select_noMatchesFound:()=>"Ingen samsvar funnet.",select_oneMatchFound:()=>"Finner ett treff",select_requiredMessageDetail:()=>"Velg en verdi.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" samsvar funnet",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" eller flere samsvar funnet",selector_selected:()=>"Avmerket",selector_unselected:()=>"Ikke avmerket",tabBarNavigationList_removeCueText:()=>"Kan fjernes",timeComponent_tooltipZoomIn:()=>"Zoom inn",timeComponent_tooltipZoomOut:()=>"Zoom ut",train_current:()=>"Gjeldende",train_message_type:()=>"Meldingstype",train_not_visited:()=>"Ikke besøkt",train_status:e=>"Trinn "+e.currentStep+" av "+e.numberOfSteps,train_visited:()=>"Besøkt",userAssistance_learnMore:()=>"Jeg vil vite mer",userAssistance_required:()=>"Nødvendig",viz_drillable:()=>"Drillbar",warn:()=>"Advarsel"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
