define(['exports'], (function(e){"use strict";const t={calendarDateConverter_parseError:e=>"Δοκιμάστε ξανά χρησιμοποιώντας μια ολοκληρωμένη ημερομηνία όπως: "+e.dateExample+".",chart_labelGroup:()=>"Ομάδα",chart_labelSeries:()=>"Σειρά",chart_labelValue:()=>"Τιμή",checkboxSet_requiredMessageDetail:()=>"Απαιτείται",checkbox_requiredMessageDetail:()=>"Απαιτείται",close:()=>"Κλείσιμο",collection_noData:()=>"Δεν υπάρχουν δεδομένα για εμφάνιση.",collection_selectAllRows:()=>"Επιλέξτε όλες τις γραμμές",collection_selectRow:e=>"Επιλογή σειράς "+e.ROW_NAME,collection_sortDisabled:()=>"Χωρίς δυνατότητα ταξινόμησης",collection_sortEnabled:()=>"Με δυνατότητα ταξινόμησης",confirmation:()=>"Επιβεβαίωση",dataVisualization_labelAndValue:e=>e.LABEL+": "+e.VALUE,dataVisualization_labelCountWithTotal:e=>e.itemCount+" από "+e.totalCount,dataVisualization_noData:()=>"Δεν υπάρχουν δεδομένα για εμφάνιση",dataVisualization_stateSelected:()=>"Επιλεγμένο",dataVisualization_stateUnselected:()=>"Μη επιλεγμένο",error:()=>"Σφάλμα",expandableList_expandCollapseInstructionText:()=>"Χρησιμοποιήστε τα πλήκτρα-βέλη για ανάπτυξη και σύμπτυξη",expandableList_groupCollapse:()=>"Συμπτύχθηκε",expandableList_groupExpand:()=>"Αναπτύχθηκε",filePicker_addFiles:()=>"Προσθήκη αρχείων",filePicker_dropzonePrimaryText:()=>"Μεταφορά και απόθεση",filePicker_dropzoneSecondaryText:()=>"Επιλέξτε ένα αρχείο ή πραγματοποιήστε απόθεση ενός αρχείου εδώ",filePicker_dropzoneSecondaryTextMultiple:()=>"Επιλέξτε αρχεία ή πραγματοποιήστε απόθεση αρχείων εδώ",filePicker_multipleFileTypeUploadError:e=>"Δεν μπορείτε να αποστείλετε αρχεία τύπου: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Κάντε αποστολή ενός αρχείου τη φορά",filePicker_singleTypeUploadError:e=>"Δεν μπορείτε να αποστείλετε αρχεία τύπου "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"άγνωστος",formControl_clear:()=>"Εκκαθάριση",formControl_day:()=>"Ημέρα",formControl_helpAvailable:()=>"Διατίθεται βοήθεια",formControl_limitReached:e=>"Έχετε συμπληρώσει το όριο "+({one:"1 χαρακτήρα"}[new Intl.PluralRules("el").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("el").format(e.CHARACTER_LIMIT)+" χαρακτήρων")+".",formControl_loading:()=>"Φόρτωση",formControl_maxLengthExceeded:e=>"Υπέρβαση μέγιστου μήκους "+e.MAX_LENGTH+".",formControl_maxLengthRemaining:e=>"Απομένουν "+e.CHARACTER_COUNT+" χαρακτήρες.",formControl_month:()=>"Μήνας",formControl_readOnly:()=>"Μόνο για ανάγνωση",formControl_requiredMessageDetail:()=>"Καταχωρίστε μια τιμή.",formControl_year:()=>"Έτος",gantt_labelDate:()=>"Ημερομηνία",gantt_labelEnd:()=>"Λήξη",gantt_labelLabel:()=>"Ετικέτα",gantt_labelRow:()=>"Σειρά",gantt_labelStart:()=>"Έναρξη",indexer_disabledLabel:e=>e.SECTION+". Δεν βρέθηκε τμήμα που να συμφωνεί.",indexer_keyboardInstructionText:()=>"Πατήστε το πλήκτρο Εnter για να επιλέξετε τιμή.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Μεταξύ "+e.FROM_SECTION+" και "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Πατήστε δύο φορές και κρατήστε πατημένο για να εισέλθετε στη λειτουργία κινήσεων και έπειτα σύρετε προς τα επάνω ή προς τα κάτω για να προσαρμόσετε την τιμή.",info:()=>"Πληροφορίες",inputDateMask_date_cleared:()=>"Έγινε εκκαθάριση ημερομηνίας",inputDateMask_dayPlaceholder:()=>"ηη",inputDateMask_empty_segment:()=>"Κενό",inputDateMask_monthPlaceholder:()=>"μμ",inputDateMask_yearPlaceholder:()=>"εεεε",inputNumber_converterParseError:()=>"Καταχωρίστε έναν αριθμό.",inputNumber_decrease:()=>"Μείωση",inputNumber_increase:()=>"Αύξηση",inputPassword_hidden:()=>"Ο κωδικός πρόσβασης κρύφτηκε",inputPassword_hide:()=>"Απόκρυψη κωδικού πρόσβασης",inputPassword_show:()=>"Εμφ. κωδ. πρόσβασης",list_suggestion:()=>"Πρόταση",messageToast_allMessagesClosed:()=>"Όλες οι αναδυόμενες ειδοποιήσεις έκλεισαν.",message_close:()=>"Κλείσιμο",message_confirmation:()=>"Επιτυχία",message_error:()=>"Σφάλμα",message_info:()=>"Πληροφορίες",message_navigationFromMessagesRegion:()=>"Περιοχή εισαγωγής μηνυμάτων. Πατήστε το F6 για πλοήγηση σε προηγούμενο εστιασμένο στοιχείο.",message_navigationToMessagesRegion:()=>"Η περιοχή μηνυμάτων έχει νέα μηνύματα. Πατήστε το F6 για πλοήγηση στην πιο πρόσφατη περιοχή μηνυμάτων.",message_warning:()=>"Προειδοποίηση",noData_message:()=>"Δεν υπάρχουν στοιχεία για εμφάνιση",overflowItemLabel:()=>"Περισσότερες καρτέλες",plural_separator:()=>", ",progressIndeterminate:()=>"Σε εξέλιξη",radio_helpForRadio:()=>"Βοήθεια για το κουμπί επιλογής",radio_requiredMessageDetail:()=>"Επιλέξτε μια τιμή.",selectMultiple_apply:()=>"Εφαρμογή",selectMultiple_back:()=>"Πίσω",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_removeSelectedTagInstructionText:()=>"Πατήστε Backspace ή Delete για να καταργηθεί η επιλεγμένη τιμή.",selectMultiple_selectedValues:()=>"Επιλεγμένες τιμές",selectMultiple_showSelectedValues:()=>"Εμφάνιση μόνο των επιλεγμένων τιμών.",selectMultiple_valuesSelected:e=>"Επιλέχθηκαν "+e.VALUE_COUNT+" τιμές.",select_addToList:()=>"Προσθήκη σε λίστα",select_addToListAvailable:()=>"Η προσθήκη σε λίστα είναι διαθέσιμη",select_moreSearchOptions:()=>"Περισσότερες επιλογές αναζήτησης",select_moreSearchOptionsAvailable:()=>"Διατίθενται περισσότερες επιλογές αναζήτησης",select_noMatchesFound:()=>"Δεν βρέθηκαν αποτελέσματα.",select_oneMatchFound:()=>"Βρέθηκε ένα αποτέλεσμα",select_requiredMessageDetail:()=>"Επιλέξτε μια τιμή.",select_sizeMatchesFound:e=>"Βρέθηκαν "+e.TOTAL_SIZE+" αποτελέσματα",select_sizeOrMoreMatchesFound:e=>"Βρέθηκαν "+e.TOTAL_SIZE+" ή περισσότερα αποτελέσματα",selector_selected:()=>"Ενεργοποιήθηκε το πλαίσιο επιλογής",selector_unselected:()=>"Το πλαίσιο επιλογής δεν είναι ενεργοποιημένο",tabBarNavigationList_removeCueText:()=>"Με δυνατότητα κατάργησης",timeComponent_tooltipZoomIn:()=>"Μεγέθυνση",timeComponent_tooltipZoomOut:()=>"Σμίκρυνση",train_current:()=>"Τρέχον",train_message_type:()=>"Τύπος μηνύματος",train_not_visited:()=>"Χωρίς επίσκεψη",train_status:e=>"Βήμα "+e.currentStep+" από "+e.numberOfSteps,train_visited:()=>"Με επίσκεψη",userAssistance_learnMore:()=>"Μάθετε περισσότερα",userAssistance_required:()=>"Απαιτείται",viz_drillable:()=>"Με δυνατότητα ανάπτυξης/σύμπτυξης",warn:()=>"Προειδοποίηση"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
