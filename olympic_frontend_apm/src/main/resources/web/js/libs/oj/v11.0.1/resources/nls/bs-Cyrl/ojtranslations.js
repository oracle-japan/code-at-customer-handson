define({"oj-message":{fatal:"Фаталан",error:"Грешка",warning:"Упозорење",info:"Информације",confirmation:"Потврда","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Вриједност није у очекиваном формату.",detail:"Унеси вриједност у очекиваном формату.","plural-separator":", ",hint:{summary:"Примјер: {exampleValue}",detail:"Унеси вриједност у овом формату: '{exampleValue}'.","detail-plural":"Унеси вриједност у овим форматима: '{exampleValue}'."},optionHint:{detail:"Прихваћена вриједност за опцију '{propertyName}' је '{propertyValueValid}'.","detail-plural":"Прихваћене вриједности за опцију '{propertyName}' су '{propertyValueValid}'."},optionTypesMismatch:{summary:"Вриједност за опцију {requiredPropertyName}' је потребна када је опција '{propertyName}' постављена на '{propertyValue}'."},optionTypeInvalid:{summary:"За опцију '{propertyName}' није била наведена вриједност очекиване врсте."},optionOutOfRange:{summary:"Вриједност {propertyValue} је изван опсега за опцију '{propertyName}'."},optionValueInvalid:{summary:"Неважећа вриједност '{propertyValue}' наведена је за опцију '{propertyName}'."},number:{decimalFormatMismatch:{summary:"Наведена вриједност није у очекиваном формату броја."},shortLongUnsupportedParse:{summary:"'short' и 'long' нису подржани за парсирање конвертора.",detail:"Промијени компоненту на Само за читање. Поља која су само за читање не позивају функцију парсирања."},currencyFormatMismatch:{summary:"Наведена вриједност није у очекиваном формату валуте."},percentFormatMismatch:{summary:"Наведена вриједност није у очекиваном формату постотка."},invalidNumberFormat:{summary:"Наведена вриједност није важећи број.",detail:"Наведи важећи број."}},color:{invalidFormat:{summary:"Неважећи формат боје.",detail:"Неважећа спецификација опције формата боје."},invalidSyntax:{summary:"Неважећа спецификација боје.",detail:"Унеси вриједност боје у складу са стандардом CSS3."}},datetime:{datetimeOutOfRange:{summary:"Вриједност' {value}' је изван опсега за '{propertyName}'.",detail:"Унеси вриједност између '{minValue}' и '{maxValue}'.",hour:"сат",minute:"минута",second:"секундa",millisec:"милисекунда",month:"мјесец",day:"дан",year:"година","month name":"назив мјесеца",weekday:"дан у седмици"},dateFormatMismatch:{summary:"Наведена вриједност није у очекиваном формату датума."},invalidTimeZoneID:{summary:"Наведен је неважећи ID временске зоне {timeZoneID}."},nonExistingTime:{summary:"Вријеме уноса не постоји јер пада током преласка на љетно рачунање времена."},missingTimeZoneData:{summary:"Недостају подаци о временској зони. Поставите да су за позив потребни 'ojs/ojtimezonedata' да бисте учитали податке о временској зони."},timeFormatMismatch:{summary:"Наведена вриједност није у очекиваном формату времена."},datetimeFormatMismatch:{summary:"Наведена вриједност није у очекиваном формату датума и времена."},dateToWeekdayMismatch:{summary:"Дан '{date}' не пада на '{weekday}'.",detail:"Унеси дан у седмици који одговара датуму."},invalidISOString:{invalidRangeSummary:"Вриједност '{value}' је изван опсега за поље '{propertyName}' у ISO 8601 низу '{isoStr}'.",summary:"Наведени низ '{isoStr}' није важећи ISO 8601 низ.",detail:"Наведи важећи ISO 8601 низ."}}},"oj-validator":{length:{hint:{min:"Унеси најманје {min} знакова.",max:"Унеси највише {max} знакова.",inRange:"Унеси између {min} и {max} знакова.",exact:"Унеси {length} знакова."},messageDetail:{tooShort:"Унеси најманје {min} знакова.",tooLong:"Унеси највише {max} знакова."},messageSummary:{tooShort:"Премало је знакова.",tooLong:"Превише је знакова."}},range:{number:{hint:{min:"Унеси број који није манји од {min}.",max:"Унеси број мањи од или једнак {max}.",inRange:"Унеси број између {min} и {max}.",exact:"Унеси број {num}."},messageDetail:{rangeUnderflow:"Унеси {min} или већи број.",rangeOverflow:"Унеси {max} или мањи број.",exact:"Унеси број {num}."},messageSummary:{rangeUnderflow:"Број је пренизак.",rangeOverflow:"Број је превисок."}},datetime:{hint:{min:"Унеси датум и вријеме на или након {min}.",max:"Унеси датум и вријеме на или прије {max}.",inRange:"Унеси датум и вријеме између {min} и {max}."},messageDetail:{rangeUnderflow:"Унеси датум на или након {min}.",rangeOverflow:"Унеси датум на или прије {max}."},messageSummary:{rangeUnderflow:"Датум и вријеме су раније од минималног датума и времена.",rangeOverflow:"Датум и вријеме су касније од максималног датума и времена."}},date:{hint:{min:"Унеси датум на или након {min}.",max:"Унеси датум на или прије {max}.",inRange:"Унеси датум између {min} и {max}."},messageDetail:{rangeUnderflow:"Унеси датум на или након {min}.",rangeOverflow:"Унеси датум на или прије {max}."},messageSummary:{rangeUnderflow:"Датум је ранији од минималног датума.",rangeOverflow:"Датум је каснији него максимални датум."}},time:{hint:{min:"Унеси вријеме на или након {min}.",max:"Унеси вријеме на или прије {max}.",inRange:"Унеси вријеме између {min} и {max}."},messageDetail:{rangeUnderflow:"Унеси вријеме на или након {min}.",rangeOverflow:"Унеси вријеме на или након {max}."},messageSummary:{rangeUnderflow:"Vrijeme је ранијe од минималног датума.",rangeOverflow:"Vrijeme је kasnije од минималног датума."}}},restriction:{date:{messageSummary:"Датум {value} односи се на онемогућен унос.",messageDetail:"Датум који сте изабрали није доступан. Покушајте са другим датумом."}},regExp:{summary:"Формат је нетачан.",detail:"Унесите дозвољене вриједности описане у овом регуларном изразу: '{pattern}'."},required:{summary:"Вриједност је обавезна.",detail:"Унеси вриједност."}},"oj-ojEditableValue":{loading:"Учитавање",requiredText:"Обавезно",helpSourceText:"Сазнај више..."},"oj-ojInputDate":{done:"Готово",cancel:"Одустани",prevText:"Претходни",nextText:"Сљедећи",currentText:"Данас",weekHeader:"Седмица",tooltipCalendar:"Изабери датум.",tooltipCalendarTime:"Изабери датум/вријеме.",tooltipCalendarDisabled:"Онемогућен одабир датума.",tooltipCalendarTimeDisabled:"Онемогућен одабир датума/времена.",picker:"Бирач",weekText:"Седмица",datePicker:"Бирач датума",inputHelp:"Притиснути типку доле или типку горе за приступ календару.",inputHelpBoth:"Притисните типку са стрелицом доле или горе за приступ календару и Shift + типку доле или горе за приступ падајућем изборнику за вријеме.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Одустани",okText:"У реду",currentTimeText:"Сада",hourWheelLabel:"Сат",minuteWheelLabel:"Минута",ampmWheelLabel:"Пријеподне/послијеподне",tooltipTime:"Изабери вријеме.",tooltipTimeDisabled:"Онемогућен одабир времена.",inputHelp:"Притисни типку са стрелицом доле или горе за приступ падајућем изборнику за вријеме.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Максимална дужина {len} премашена.",accessibleMaxLengthRemaining:"{chars} знакова преостало."},"oj-ojInputPassword":{regexp:{messageDetail:"Вриједност мора  одговарати овом обрасцу '{pattern}'."},accessibleShowPassword:"Приказати лозинку.",accessibleHidePassword:"Сакриј лозинку."},"oj-ojFilmStrip":{labelAccFilmStrip:"Приказивање стране {pageIndex} од {pageCount}",labelAccArrowNextPage:"Изабери Сљедећа да би се приказала сљедећа страна",labelAccArrowPreviousPage:"Изабери Претходна да би се приказала претходна страна",tipArrowNextPage:"Сљедећа",tipArrowPreviousPage:"Претходна"},"oj-ojDataGrid":{accessibleSortAscending:"{id} сортирано узлазно",accessibleSortDescending:"{id} сортирано силазно",accessibleActionableMode:"Покрени начин дјеловања.",accessibleNavigationMode:"Покрените начин навигације, притисните F2 да бисте покренули начин уређивања или дјеловања.",accessibleEditableMode:"Покрените начин уређивања, притисните Escape за прелазак изван решетке података.",accessibleSummaryExact:"Ово је решетка података с {rownum} редова и {colnum} колона",accessibleSummaryEstimate:"Ово је решетка података с непознатим бројем редова и колона",accessibleSummaryExpanded:"Тренутно је проширено {num} редова",accessibleRowExpanded:"Ред проширен",accessibleRowCollapsed:"Ред сажет",accessibleRowSelected:"Изабран је ред {row}",accessibleColumnSelected:"Изабрана је колона {column}",accessibleStateSelected:"изабрано",accessibleMultiCellSelected:"Изабрано је {num} ћелија",accessibleColumnSpanContext:"Ширина: {extent}",accessibleRowSpanContext:"Висина: {extent}",accessibleRowContext:"Ред {index}",accessibleColumnContext:"Колона {index}",accessibleRowHeaderContext:"Заглавље реда {index}",accessibleColumnHeaderContext:"Заглавље колоне {index}",accessibleRowEndHeaderContext:"Заглавље краја реда {index}",accessibleColumnEndHeaderContext:"Заглавље краја колоне {index}",accessibleRowHeaderLabelContext:"Ознака заглавља реда {level}",accessibleColumnHeaderLabelContext:"Ознака заглавља колоне {level}",accessibleRowEndHeaderLabelContext:"Ознака заглавља краја реда {level}",accessibleColumnEndHeaderLabelContext:"Ознака заглавља краја колоне {level}",accessibleLevelContext:"Ниво {level}",accessibleRangeSelectModeOn:"Начин додавања изабраног опсега ћелија укључен.",accessibleRangeSelectModeOff:"Начин додавања изабраног опсега ћелија искључен.",accessibleFirstRow:"Достигли сте први ред.",accessibleLastRow:"Достигли сте задњи ред.",accessibleFirstColumn:"Достигли сте прву колону",accessibleLastColumn:"Достигли сте задњу колону.",accessibleSelectionAffordanceTop:"Горњи показивач избора.",accessibleSelectionAffordanceBottom:"Доњи показивач избора.",msgFetchingData:"Дохватање података...",msgNoData:"Нема ставки за приказ.",labelResize:"Промијени величину",labelResizeWidth:"Промијени ширину",labelResizeHeight:"Промијени висину",labelSortRow:"Сортираj ред",labelSortRowAsc:"Сортираj ред узлазно",labelSortRowDsc:"Сортираj ред силазно",labelSortCol:"Сортираj колону",labelSortColAsc:"Сортираj колону узлазно",labelSortColDsc:"Сортирај колону силазно",labelCut:"Изрежи",labelPaste:"Залијепи",labelEnableNonContiguous:"Омогући неконтинуиран избор",labelDisableNonContiguous:"Онемогући неконтинуиран избор",labelResizeDialogSubmit:"У реду",labelResizeDialogCancel:"Одустани",accessibleContainsControls:"Садржи контроле"},"oj-ojRowExpander":{accessibleLevelDescription:"Ниво {level}",accessibleRowDescription:"Ниво {level}, ред {num} од {total}",accessibleRowExpanded:"Ред проширен",accessibleRowCollapsed:"Ред сажет",accessibleStateExpanded:"проширено",accessibleStateCollapsed:"сажето"},"oj-ojListView":{msgFetchingData:"Дохватање података...",msgNoData:"Нема ставки за приказ.",msgItemsAppended:"{count}ставки додано на крај.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Двапут додирните и држите. Чекајте звук па повуците да бисте прераспоредили.",accessibleReorderBeforeItem:"Испред {item}",accessibleReorderAfterItem:"Иза {item}",accessibleReorderInsideItem:"У {item}",accessibleNavigateSkipItems:"Прескакање {numSkip} ставки",labelCut:"Изрежи",labelCopy:"Копирај",labelPaste:"Залијепи",labelPasteBefore:"Залијепи испред",labelPasteAfter:"Залијепи иза"},"oj-_ojLabel":{tooltipHelp:"Помоћ",tooltipRequired:"Обавезно"},"oj-ojLabel":{tooltipHelp:"Помоћ",tooltipRequired:"Обавезно"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Декремент",tooltipIncrement:"Инкремент"},"oj-ojTable":{accessibleColumnContext:"Колона {index}",accessibleColumnFooterContext:"Подножје колоне{index}",accessibleColumnHeaderContext:"Заглавље колоне {index}",accessibleRowContext:"Ред {index}",accessibleSortable:"{id} се може сортирати",accessibleSortAscending:"{id} сортирано узлазно",accessibleSortDescending:"{id} сортирано силазно",accessibleStateSelected:"изабрано",labelAccSelectionAffordanceTop:"Горњи показивач избора",labelAccSelectionAffordanceBottom:"Доњи показивач избора",labelEnableNonContiguousSelection:"Омогући неконтинуиран избор",labelDisableNonContiguousSelection:"Онемогући неконтинуиран избор",labelResize:"Промијени величину",labelResizePopupSubmit:"У реду",labelResizePopupCancel:"Одустани",labelResizePopupSpinner:"Промијени величину колоне",labelSelectRow:"Изабери ред",labelEditRow:"Уреди ред",labelSelectAndEditRow:"Изабери и уреди ред",labelSelectColumn:"Изабери колону",labelSort:"Сортирај",labelSortAsc:"Сортирај узлазно",labelSortDsc:"Сортирај силазно",msgFetchingData:"Дохватање података...",msgNoData:"Нема података за приказ.",msgInitializing:"Иницијализирање...",msgColumnResizeWidthValidation:"Вриједност ширине мора бити цијели број.",msgScrollPolicyMaxCountSummary:"Прекорачен је максимални број редова за помицање у табели.",msgScrollPolicyMaxCountDetail:"Поново учитај с мањим скупом података.",msgStatusSortAscending:"{0} сортирано узлазно.",msgStatusSortDescending:"{0} сортирано силазно."},"oj-ojTabs":{labelCut:"Изрежи",labelPasteBefore:"Залијепи испред",labelPasteAfter:"Залијепи иза",labelRemove:"Уклони",labelReorder:"Промијени редослијед",removeCueText:"Може се уклонити"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Поље за претрагу",noMatchesFound:"Није пронађено ниједно подударање",noMoreResults:"Нема више резултата",oneMatchesFound:"Пронађено је једно подударање",moreMatchesFound:"Пронађено је {num} подударања",filterFurther:"Доступно је више резултата; додатно филтрирај."},"oj-ojSwitch":{SwitchON:"Укључено",SwitchOFF:"Искључено"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Није пронађено ниједно подударање",noMoreResults:"Нема више резултата",oneMatchesFound:"Пронађено је једно подударање",moreMatchesFound:"Пронађено је {num} подударања",filterFurther:"Доступно је више резултата; додатно филтрирај."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Није пронађено ниједно подударање",oneMatchFound:"Пронађено је једно подударање",multipleMatchesFound:"Пронађено је {num} подударања",nOrMoreMatchesFound:"Пронађено је најмање {num} подударања",cancel:"Одустани",labelAccOpenDropdown:"прошири",labelAccClearValue:"избриши вриједност",noResultsLine1:"Није пронађен ниједан резултат",noResultsLine2:"Не можемо пронаћи ништа што се подудара с вашом претрагом."},"oj-ojInputSearch2":{cancel:"Одустани"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Није пронађено ниједно подударање",oneMatchesFound:"Пронађено је једно подударање",moreMatchesFound:"Пронађено је {num} подударања"},"oj-ojTreeView":{treeViewSelectorAria:"TreeView бирач {rowKey}"},"oj-ojTree":{stateLoading:"Учитавање...",labelNewNode:"Нови чвор",labelMultiSelection:"Вишеструку одабир",labelEdit:"Уреди",labelCreate:"Креирај",labelCut:"Изрежи",labelCopy:"Копирај",labelPaste:"Залијепи",labelPasteAfter:"Залијепи иза",labelPasteBefore:"Залијепи испред",labelRemove:"Уклони",labelRename:"Преименуј",labelNoData:"Нема података"},"oj-ojPagingControl":{labelAccPaging:"Обиљежавање страна",labelAccPageNumber:"Садржај стране {pageNum} учитан",labelAccNavFirstPage:"Прва страна",labelAccNavLastPage:"Задња страна",labelAccNavNextPage:"Сљедећа страна",labelAccNavPreviousPage:"Претходна страна",labelAccNavPage:"Страна",labelLoadMore:"Прикажи више...",labelLoadMoreMaxRows:"Достигнуто је ограничење максималног броја редова од {maxRows}",labelNavInputPage:"Страна",labelNavInputPageMax:"од {pageMax}",fullMsgItemRange:"{pageFrom} - {pageTo} од {pageMax} ставки",fullMsgItemRangeAtLeast:"{pageFrom} - {pageTo} од најмање {pageMax} ставки",fullMsgItemRangeApprox:"{pageFrom} - {pageTo} од отприлике {pageMax} ставки",msgItemRangeNoTotal:"{pageFrom} - {pageTo} ставки",fullMsgItem:"{pageTo} од {pageMax} ставки",fullMsgItemAtLeast:"{pageTo} од најмање {pageMax} ставки",fullMsgItemApprox:"{pageTo} од отприлике {pageMax} ставки",msgItemNoTotal:"{pageTo} ставки",msgItemRangeCurrent:"{pageFrom} - {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"од",msgItemRangeOfAtLeast:"од најмање",msgItemRangeOfApprox:"од отприлике",msgItemRangeItems:"ставки",tipNavInputPage:"Иди на страну",tipNavPageLink:"Иди на страну {pageNum}",tipNavNextPage:"Сљедећа",tipNavPreviousPage:"Претходна",tipNavFirstPage:"Прва",tipNavLastPage:"Задња",pageInvalid:{summary:"Унесена вриједност стране је неважећа.",detail:"Унеси вриједност већу од 0."},maxPageLinksInvalid:{summary:"Вриједност за maxPageLinks је неважећа.",detail:"Унеси вриједност већу од 4."}},"oj-ojMasonryLayout":{labelCut:"Изрежи",labelPasteBefore:"Залијепи испред",labelPasteAfter:"Залијепи иза"},"oj-panel":{labelAccButtonExpand:"Прошири",labelAccButtonCollapse:"Сажми",labelAccButtonRemove:"Уклони",labelAccFlipForward:"Преокрени напријед",labelAccFlipBack:"Преокрени назад",tipDragToReorder:"Повуци за промјену редослиједа",labelAccDragToReorder:"Повуци за промјену редослиједа; доступан је контекстуални изборник"},"oj-ojChart":{labelDefaultGroupName:"Група {0}",labelSeries:"Серија",labelGroup:"Група",labelDate:"Датум",labelValue:"Вриједност",labelTargetValue:"Циљ",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Постотак",labelLow:"Низак",labelHigh:"Висок",labelOpen:"Отвори",labelClose:"Затвори",labelVolume:"Волумен",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Мин.",labelMax:"Макс.",labelOther:"Друго",tooltipPan:"Помицање",tooltipSelect:"Marquee одабир",tooltipZoom:"Marquee зумирање",componentName:"Графикон"},"oj-dvtBaseGauge":{componentName:"Мјерач"},"oj-ojDiagram":{promotedLink:"{0} веза",promotedLinks:"{0} везе",promotedLinkAriaDesc:"Индиректно",componentName:"Дијаграм"},"oj-ojGantt":{componentName:"Гантограм",accessibleDurationDays:"{0} дана",accessibleDurationHours:"{0} сати",accessibleTaskInfo:"Почетно вријеме је {0}, завршно вријеме {1}, а трајање {2}",accessibleMilestoneInfo:"Вријеме је {0}",accessibleRowInfo:"Ред {0}",accessibleTaskTypeMilestone:"Кључни догађај",accessibleTaskTypeSummary:"Сажетак",accessiblePredecessorInfo:"{0} претходника",accessibleSuccessorInfo:"{0} насљедника",accessibleDependencyInfo:"Врста зависности {0}, повезује {1} са {2}",startStartDependencyAriaDesc:"од почетка до почетка",startFinishDependencyAriaDesc:"од почетка до краја",finishStartDependencyAriaDesc:"од краја до почетка",finishFinishDependencyAriaDesc:"од краја до краја",tooltipZoomIn:"Увећај",tooltipZoomOut:"Умањи",labelLevel:"Ниво",labelRow:"Ред",labelStart:"Почетак",labelEnd:"Крај",labelDate:"Датум",labelBaselineStart:"Референтни почетак",labelBaselineEnd:"Референтни крај",labelBaselineDate:"Референтни датум",labelLabel:"Ознака",labelProgress:"Напредак",labelMoveBy:"Помакни за",labelResizeBy:"Промијени величину за",taskMoveInitiated:"Покренуто је премјештање задатка",taskResizeEndInitiated:"Покренут је завршетак промјене величине задатка",taskResizeStartInitiated:"Покренут је почетак промјене величине задатка",taskMoveSelectionInfo:"Изабрано је {0} осталих",taskResizeSelectionInfo:"Изабрано је {0} осталих",taskMoveInitiatedInstruction:"Користи типке са стрелицама за премјештање",taskResizeInitiatedInstruction:"Користи типке са стрелицама за промјену величине",taskMoveFinalized:"Премјештање задатка завршено",taskResizeFinalized:"Промјена величине задатка завршена",taskMoveCancelled:"Премјештање задатка отказано",taskResizeCancelled:"Промјена величине задатка отказана",taskResizeStartHandle:"Показивач за почетак промјене величине задатка",taskResizeEndHandle:"Показивач за kraj промјене величине задатка"},"oj-ojLegend":{componentName:"Легенда",tooltipExpand:"Прошири",tooltipCollapse:"Сажми"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Друго",labelGroup:"Група",labelSize:"Величина",labelAdditionalData:"Додатни подаци",componentName:"Оквир {0}"},"oj-ojPictoChart":{componentName:"Графикон са сликом"},"oj-ojSparkChart":{componentName:"Графикон"},"oj-ojSunburst":{labelColor:"Боја",labelSize:"Величина",tooltipExpand:"Прошири",tooltipCollapse:"Сажми",componentName:"Кружни приказ"},"oj-ojTagCloud":{componentName:"Облак с кључним ријечима"},"oj-ojThematicMap":{componentName:"Тематска мапа",areasRegion:"Подручја",linksRegion:"Везе",markersRegion:"Ознаке"},"oj-ojTimeAxis":{componentName:"Временска оса."},"oj-ojTimeline":{componentName:"Временска црта",accessibleItemDesc:"Опис: {0}.",accessibleItemEnd:"Завршно вријеме је {0}.",accessibleItemStart:"Почетно вријеме је {0}.",accessibleItemTitle:"Наслов: {0}.",labelSeries:"Серија",tooltipZoomIn:"Увећај",tooltipZoomOut:"Умањи",labelStart:"Почетак",labelEnd:"Крај",labelDate:"Датум",labelTitle:"Назив",labelDescription:"Опис"},"oj-ojTreemap":{labelColor:"Боја",labelSize:"Величина",tooltipIsolate:"Изолирај",tooltipRestore:"Врати",componentName:"Treemap"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Неважећи подаци",labelNoData:"Нема података за приказ",labelClearSelection:"Поништи одабир",labelDataVisualization:"Визуализација података",stateSelected:"Изабрано",stateUnselected:"Није изабрано",stateMaximized:"Максимизирано",stateMinimized:"Минимизирано",stateExpanded:"Проширено",stateCollapsed:"Сажето",stateIsolated:"Изолирано",stateHidden:"Скривено",stateVisible:"Видљиво",stateDrillable:"Рашчлањиво",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} од {1}"},"oj-ojNavigationList":{defaultRootLabel:"Навигацијски списак",hierMenuBtnLabel:"Дугме хијерархијског изборника",selectedLabel:"изабрано",previousIcon:"Претходна",msgFetchingData:"Дохватање података...",msgNoData:"Нема ставки за приказ.",overflowItemLabel:"Више",accessibleReorderTouchInstructionText:"Двапут додирните и држите. Чекајте звук па повуците да бисте прераспоредили.",accessibleReorderBeforeItem:"Испред {item}",accessibleReorderAfterItem:"Иза {item}",labelCut:"Изрежи",labelPasteBefore:"Залијепи испред",labelPasteAfter:"Залијепи иза",labelRemove:"Уклони",removeCueText:"Може се уклонити"},"oj-ojSlider":{noValue:"ojSlider нема вриједност",maxMin:"Макс. вриједност мора бити већа од мин.",startEnd:"Вриједност value.start не смије бити већа од вриједности value.end",valueRange:"Вриједност мора бити између мин. и макс. вриједности опсега",optionNum:"Опција {option} није број",invalidStep:"Није ваљан корак; корак мора бити > 0",lowerValueThumb:"избор ниже вриједности",higherValueThumb:"избор више вриједности"},"oj-ojDialog":{labelCloseIcon:"Затвори"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Улазак у скочни прозор. Притисните F6 за навигацију између скочног прозора и повезане контроле.",ariaLiveRegionInitialFocusNone:"Скочни прозор је отворен. Притисните F6 за навигацију између скочног прозора и повезане контроле.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Улазак у скочни прозор. Он се може затворити преласком до заднје везе унутар нјега.",ariaLiveRegionInitialFocusNoneTouch:"Скочни прозор је отворен. Идите на сљедећу везу да бисте успоставили фокус унутар скочног прозора.",ariaFocusSkipLink:"Двапут додирни за прелазак на отворени скочни прозор.",ariaCloseSkipLink:"Двапут додирни за затварање отвореног скочног прозора."},"oj-ojRefresher":{ariaRefreshLink:"Активирајте везу да бисте освјежили садржај",ariaRefreshingLink:"Освјежавање садржаја",ariaRefreshCompleteLink:"Освјежавање завршено"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Прикажи почетне акције",ariaShowEndActionsDescription:"Прикажи завршне акције",ariaHideActionsDescription:"Сакриј акције"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Нема подударног групног заглавља",ariaOthersLabel:"број",ariaInBetweenText:"Између {first} и {second}",ariaKeyboardInstructionText:"Притисни Enter за избор вриједности.",ariaTouchInstructionText:"Двапут додирнути  и држати. Чекати на звук и онда превући да би се преуредило."},"oj-ojMenu":{labelCancel:"Одустани",ariaFocusSkipLink:"Фокус је унутар изборника, двапут додирнути или  превући да би се фокус  помјерио на прву тачку изборника."},"oj-ojColorSpectrum":{labelHue:"Нијанса",labelOpacity:"Непрозирност",labelSatLum:"Засићеност/освијетљеност",labelThumbDesc:"Четверосмјерни клизач спектра боја."},"oj-ojColorPalette":{labelNone:"Ништа"},"oj-ojColorPicker":{labelSwatches:"Узорци боје",labelCustomColors:"Прилагођене боје",labelPrevColor:"Претходна боја",labelDefColor:"Задана боја",labelDelete:"Избриши",labelDeleteQ:"Избрисати?",labelAdd:"Додај",labelAddColor:"Додај боју",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Нијанса",labelSliderSaturation:"Засићеност",labelSliderSat:"Суб",labelSliderLightness:"Свјетлина",labelSliderLum:"Освјетљење",labelSliderAlpha:"Alpha",labelOpacity:"Непрозирност",labelSliderRed:"Црвена",labelSliderGreen:"Зелена",labelSliderBlue:"Плава"},"oj-ojFilePicker":{dropzoneText:"Испусти датотеке овдје и кликни за учитаванје",singleFileUploadError:"Учитај једну по једну датотеку.",singleFileTypeUploadError:"Не можете учитати датотеке врсте {fileType}.",multipleFileTypeUploadError:"Не можете учитати датотеке врсте {fileTypes}.",dropzonePrimaryText:"Повуци и испусти",secondaryDropzoneText:"Изабери датотеку или испусти неку овдје.",secondaryDropzoneTextMultiple:"Изабери или испусти датотеке овдје.",unknownFileType:"непознато"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"У току"},"oj-ojMessage":{labelCloseIcon:"Затвори",categories:{error:"Грешка",warning:"Упозорење",info:"Информације",confirmation:"Потврда"}},"oj-ojSelector":{checkboxAriaLabel:"Потврда оквира - {rowKey}",checkboxAriaLabelSelected:" изабрано",checkboxAriaLabelUnselected:" није изабрано"},"oj-ojMessages":{labelLandmark:"Поруке",ariaLiveRegion:{navigationFromKeyboard:"Подручје за уношење порука. Притисните F6 за повратаk на претходно фокусирани елемент.",navigationToTouch:"Подручје за поруке има нове поруке. Помоћу voice-over кружног навигатора пређи на референтну тачку за поруке.",navigationToKeyboard:"Подручје за поруке садржи нове поруке. Притисните F6 за прелазак на подручје с најновијим порукама.",newMessage:"Категорија порука {category}. {summary}. {detail}."}},"oj-ojConveyorBelt":{tipArrowNext:"Сљедећа",tipArrowPrevious:"Претходна"}});