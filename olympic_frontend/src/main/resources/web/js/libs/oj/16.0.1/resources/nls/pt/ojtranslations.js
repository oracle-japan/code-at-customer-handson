define({"oj-message":{fatal:"Fatal",error:"Erro",warning:"Advertência",info:"Informações",confirmation:"Confirmação","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"O valor não está no formato esperado.",detail:"Informe um valor no formato esperado.","plural-separator":", ",hint:{summary:"Exemplo: {exampleValue}",detail:"Tente novamente usando um formato como este: {exampleValue}.","detail-plural":"Digite um valor nestes formatos: {exampleValue}."},optionHint:{detail:"Um valor aceito para a opção '{propertyName}' é '{propertyValueValid}'.","detail-plural":"Os valores aceitos para a opção '{propertyName}' são '{propertyValueValid}'."},optionTypesMismatch:{summary:"Um valor para a opção '{requiredPropertyName}' é obrigatório quando a opção '{propertyName}' está definida como '{propertyValue}'."},optionTypeInvalid:{summary:"Um valor do tipo esperado não foi fornecido para a opção '{propertyName}'."},optionOutOfRange:{summary:"O valor {propertyValue} está fora da faixa da opção '{propertyName}'."},optionValueInvalid:{summary:"Um valor inválido '{propertyValue}' foi especificado para a opção '{propertyName}'."},number:{decimalFormatMismatch:{summary:"O valor informado não está no formato numérico esperado."},shortLongUnsupportedParse:{summary:"'short' e 'long' não são suportados para parsing do conversor.",detail:"Altere o componente para readonly. Os campos readonly não chamam a função de parsing do conversor."},currencyFormatMismatch:{summary:"O valor informado não está no formato de moeda esperado."},percentFormatMismatch:{summary:"O valor informado não está no formato de porcentagem esperado."},invalidNumberFormat:{summary:"O valor informado não é um número válido.",detail:"Forneça um número válido."}},color:{invalidFormat:{summary:"Formato de cor inválido.",detail:"Especificação inválida para a opção de formato de cor."},invalidSyntax:{summary:"Especificação de cor inválida.",detail:"Digite um valor de cor em conformidade com o padrão CSS3."}},datetime:{datetimeOutOfRange:{summary:"O valor '{value}' está fora da faixa de '{propertyName}'.",detail:"Informe um valor entre '{minValue}' e '{maxValue}'.",hour:"hora",minute:"minuto",second:"segundo",millisec:"milisseg.",month:"mês",day:"dia",year:"ano","month name":"nome do mês",weekday:"dia da semana"},dateFormatMismatch:{summary:"O valor informado não está no formato de data esperado."},invalidTimeZoneID:{summary:"Id de fuso horário inválido {timeZoneID} fornecido"},nonExistingTime:{summary:"O horário de entrada não existe porque ele se situa na transição para o horário de verão."},missingTimeZoneData:{summary:"Faltam dados de TimeZone. Chame o 'ojs/ojtimezonedata' necessário para carregar os dados de TimeZone."},timeFormatMismatch:{summary:"O valor informado não está no formato de hora esperado."},datetimeFormatMismatch:{summary:"O valor informado não está no formato de data e hora esperado."},dateToWeekdayMismatch:{summary:"O dia '{date}' não é um '{weekday}'.",detail:"Informe um dia útil que corresponda à data."},invalidISOString:{invalidRangeSummary:"O valor '{value}' está fora da faixa do campo '{propertyName}' na string ISO 8601 '{isoStr}'.",summary:"A string '{isoStr}' fornecida não é uma string ISO 8601 válida.",detail:"Forneça uma string ISO 8601 válida."}}},"oj-validator":{length:{hint:{min:"Informe {min} ou mais caracteres.",max:"Informe {max}caracteres ou menos.",inRange:"Digite de {min} a {max} caracteres.",exact:"Informe {length} caracteres."},messageDetail:{tooShort:"Informe {min} ou mais caracteres.",tooLong:"Não digite mais de {max} caracteres."},messageSummary:{tooShort:"Há poucos caracteres.",tooLong:"Há muitos caracteres."}},range:{number:{hint:{min:"Informe um número maior ou igual a {min}.",max:"Informe um número menor ou igual a {max}.",inRange:"Informe um número entre {min} e {max}.",exact:"Digite o número {num}."},messageDetail:{rangeUnderflow:"Digite {min} ou um número maior.",rangeOverflow:"Digite {max} ou um número menor.",exact:"Digite o número {num}."},messageSummary:{rangeUnderflow:"O número é muito baixo.",rangeOverflow:"O número é muito alto."}},datetime:{hint:{min:"Informe uma data e uma hora iguais ou posteriores a {min}.",max:"Informe uma data e uma hora iguais ou anteriores a {max}.",inRange:"Informe uma data e uma hora entre {min} e {max}."},messageDetail:{rangeUnderflow:"Informe uma data posterior ou igual a {min}.",rangeOverflow:"Informe uma data anterior ou igual a {max}."},messageSummary:{rangeUnderflow:"A data e a hora são anteriores à data e a hora mínimas.",rangeOverflow:"A data e a hora são posteriores à data e a hora máximas."}},date:{hint:{min:"Informe uma data posterior ou igual a {min}.",max:"Informe uma data anterior ou igual a {max}.",inRange:"Informe uma data entre {min} e {max}."},messageDetail:{rangeUnderflow:"Informe uma data posterior ou igual a {min}.",rangeOverflow:"Informe uma data anterior ou igual a {max}."},messageSummary:{rangeUnderflow:"A data é anterior à data mínima.",rangeOverflow:"A data e é posterior à data máxima."}},time:{hint:{min:"Informe uma hora posterior ou igual a {min}.",max:"Informe uma hora anterior ou igual a {max}.",inRange:"Informe uma hora entre {min} e {max}."},messageDetail:{rangeUnderflow:"Informe uma hora igual ou posterior a {min}.",rangeOverflow:"Informe uma hora igual ou anterior a {max}."},messageSummary:{rangeUnderflow:"A hora é anterior à hora mínima.",rangeOverflow:"A hora é posterior à hora máxima."}}},restriction:{date:{messageSummary:"A data {value} é de uma entrada desativada.",messageDetail:"A data selecionada não está disponível. Tente outra data."}},regExp:{summary:"O formato está incorreto.",detail:"Digite os valores permitidos descritos nesta expressão regular: '{pattern}'."},required:{summary:"O valor é obrigatório.",detail:"Digite um valor."}},"oj-ojEditableValue":{loading:"Carregando",requiredText:"Obrigatório",helpSourceText:"Saiba mais..."},"oj-ojInputDate":{done:"Concluído",cancel:"Cancelar",time:"Hora",accessibleClearIconAltText:"Remover entrada",prevText:"Anterior",nextText:"Próximo",currentText:"Hoje",weekHeader:"Sem.",tooltipCalendar:"Selecionar Data.",tooltipCalendarTime:"Selecionar Data/Hora.",tooltipCalendarDisabled:"Seleção de Data Desativada.",tooltipCalendarTimeDisabled:"Seleção de Data/Hora Desativada.",picker:"Seletor",weekText:"Semana",datePicker:"Seletor de Data",inputHelp:"Pressione Seta para baixo ou Seta para cima para acessar o Calendário.",inputHelpBoth:"Pressione Seta para baixo ou Seta para cima para acessar o Calendário e Shift + Seta para baixo ou Shift + Seta para cima para acessar a lista drop-down de horários.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{accessibleClearIconAltText:"Remover entrada",cancelText:"Cancelar",okText:"OK",currentTimeText:"Agora",hourWheelLabel:"Hora",minuteWheelLabel:"Minuto",ampmWheelLabel:"AMPM",tooltipTime:"Selecionar Horário.",tooltipTimeDisabled:"Seleção de Hora Desativada.",inputHelp:"Pressione Seta para baixo ou Seta para cima para acessar a lista drop-down de horários.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Tamanho máximo {len} excedido.",accessibleMaxLengthRemaining:"{chars} caracteres restantes."},"oj-ojInputText":{accessibleClearIcon:"Remover"},"oj-ojInputPassword":{regexp:{messageDetail:"O valor deve corresponder a este padrão: '{pattern}'."},accessibleShowPassword:"Mostrar senha.",accessibleHidePassword:"Ocultar senha."},"oj-ojFilmStrip":{labelAccFilmStrip:"Exibindo página {pageIndex} de {pageCount}",labelAccArrowNextPage:"Selecione Próximo para exibir a próxima página",labelAccArrowPreviousPage:"Selecione Anterior para exibir a página anterior",tipArrowNextPage:"Próximo",tipArrowPreviousPage:"Anterior"},"oj-ojDataGrid":{accessibleSortAscending:"{id} classificado(a) em ordem crescente",accessibleSortDescending:"{id} classificado em ordem decrescente",accessibleSortable:"{id} classificável",accessibleActionableMode:"Informe o modo acionável.",accessibleNavigationMode:"Entre no modo de navegação; pressione F2 para entrar no modo de edição ou no modo acionável.",accessibleEditableMode:"Entre no modo editável; pressione Escape para navegar para fora da grade de dados.",accessibleSummaryExact:"Esta é uma grade de dados com {rownum} linhas e {colnum} colunas",accessibleSummaryEstimate:"Esta é uma grade de dados com um número desconhecido de linhas e colunas",accessibleSummaryExpanded:"Atualmente há {num} linhas expandidas",accessibleRowExpanded:"Linha expandida",accessibleExpanded:"Expandido",accessibleRowCollapsed:"Linha contraída",accessibleCollapsed:"Contraído",accessibleRowSelected:"Linha {row} selecionada",accessibleColumnSelected:"Coluna {column} selecionada",accessibleStateSelected:"selecionado",accessibleMultiCellSelected:"{num} células selecionadas",accessibleColumnSpanContext:"{extent} de largura",accessibleRowSpanContext:"{extent} de altura",accessibleRowContext:"Linha {index}",accessibleColumnContext:"Coluna {index}",accessibleRowHeaderContext:"Cabeçalho de Linha {index}",accessibleColumnHeaderContext:"Cabeçalho de Coluna {index}",accessibleRowEndHeaderContext:"Cabeçalho de Fim de Linha {index}",accessibleColumnEndHeaderContext:"Cabeçalho de Fim de Coluna {index}",accessibleRowHeaderLabelContext:"Label do Cabeçalho da Linha {level}",accessibleColumnHeaderLabelContext:"Label do Cabeçalho da Coluna {level}",accessibleRowEndHeaderLabelContext:"Label do Cabeçalho de Fim de Linha {level}",accessibleColumnEndHeaderLabelContext:"Label do Cabeçalho de Fim de Coluna {level}",accessibleLevelContext:"Nível {level}",accessibleRangeSelectModeOn:"Modo de adição de faixa de células selecionada ativo.",accessibleRangeSelectModeOff:"Modo de adição de faixa de células selecionada inativo.",accessibleFirstRow:"Você atingiu a primeira linha.",accessibleLastRow:"Você atingiu a última linha.",accessibleFirstColumn:"Você atingiu a primeira coluna",accessibleLastColumn:"Você atingiu a última coluna.",accessibleSelectionAffordanceTop:"Handle de seleção superior.",accessibleSelectionAffordanceBottom:"Handle de seleção inferior.",accessibleLevelHierarchicalContext:"Nível {level}",accessibleRowHierarchicalFull:"Linha {posInSet} de {setSize} linhas",accessibleRowHierarchicalPartial:"Linha {posInSet} de pelo menos {setSize} linhas",accessibleRowHierarchicalUnknown:"Pelo menos a linha {posInSet} de pelo menos {setSize} linhas",accessibleColumnHierarchicalFull:"Coluna {posInSet} de {setSize} colunas",accessibleColumnHierarchicalPartial:"Coluna {posInSet} de pelo menos {setSize} colunas",accessibleColumnHierarchicalUnknown:"Pelo menos a coluna {posInSet} de pelo menos {setSize} colunas",msgFetchingData:"Extraindo Dados...",msgNoData:"Não há itens para exibição.",labelHideColumns:"Ocultar Colunas",labelHideRows:"Ocultar Linhas",labelUnhideColumns:"Exibir Colunas",labelUnhideRows:"Exibir Linhas",labelResize:"Redimensionar",labelResizeWidth:"Redimensionar Largura",labelResizeHeight:"Redimensionar Altura",labelSortAsc:"Classificar por Ordem Crescente",labelSortDsc:"Classificar por Ordem Decrescente",labelSortRow:"Classificar Linha",labelSortRowAsc:"Classificar Linha em Ordem Crescente",labelSortRowDsc:"Classificar Linha em Ordem Decrescente",labelSortCol:"Classificar Coluna",labelSortColAsc:"Classificar Coluna em Ordem Crescente",labelSortColDsc:"Classificar Coluna em Ordem Decrescente",labelFilter:"Filtrar",labelFilterCol:"Filtrar Coluna",labelCut:"Recortar",labelPaste:"Colar",labelCutCells:"Recortar",labelPasteCells:"Colar",labelCopyCells:"Copiar",labelAutoFill:"Preenchimento Automático",labelEnableNonContiguous:"Ativar Seleção Não Contígua",labelDisableNonContiguous:"Desativar Seleção Não Contígua",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Cancelar",accessibleContainsControls:"Contém Controles",labelSelectMultiple:"Selecionar Vários Arquivos",labelResizeDialogApply:"Aplicar",labelResizeFitToContent:"Redimensionar para Ajustar",columnWidth:"Largura em Pixels",rowHeight:"Altura em Pixels",labelResizeColumn:"Redimensionar Coluna",labelResizeRow:"Redimensionar Linha",resizeColumnDialog:"Redimensionar coluna",resizeRowDialog:"Redimensionar linha",labelFreezeRow:"Congelar Linhas",labelFreezeCol:"Congelar Colunas",labelUnfreezeRow:"Descongelar Linhas",labelUnfreezeCol:"Descongelar Colunas",collapsedText:"Contrair",expandedText:"Expandir",tooltipRequired:"Obrigatório"},"oj-ojRowExpander":{accessibleLevelDescription:"Nível {level}",accessibleRowDescription:"Nível {level}, Linha {num} de {total}",accessibleRowExpanded:"Linha expandida",accessibleRowCollapsed:"Linha contraída",accessibleStateExpanded:"expandido",accessibleStateCollapsed:"contraído"},"oj-ojStreamList":{msgFetchingData:"Extraindo Dados..."},"oj-ojListView":{msgFetchingData:"Extraindo Dados...",msgNoData:"Não há itens para exibição.",msgItemsAppended:"{count} itens anexados ao final.",msgFetchCompleted:"Todos os itens são extraídos.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleExpandCollapseInstructionText:"Use as teclas de seta para expandir e contrair.",accessibleGroupExpand:"Expandido",accessibleGroupCollapse:"Contraído",accessibleReorderTouchInstructionText:"Toque duas vezes e mantenha. Aguarde o sinal sonoro e depois arraste para reorganizar.",accessibleReorderBeforeItem:"Antes {item}",accessibleReorderAfterItem:"Após {item}",accessibleReorderInsideItem:"Em {item}",accessibleNavigateSkipItems:"Ignorando {numSkip} itens",accessibleSuggestion:"Sugestão",labelCut:"Recortar",labelCopy:"Copiar",labelPaste:"Colar",labelPasteBefore:"Colar Antes",labelPasteAfter:"Colar Depois"},"oj-ojWaterfallLayout":{msgFetchingData:"Extraindo Dados..."},"oj-_ojLabel":{tooltipHelp:"Ajuda",tooltipRequired:"Obrigatório"},"oj-ojLabel":{tooltipHelp:"Ajuda",tooltipRequired:"Obrigatório"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Reduzir",tooltipIncrement:"Incrementar"},"oj-ojTable":{accessibleAddRow:"Insira dados para adicionar uma nova linha.",accessibleColumnContext:"Coluna {index}",accessibleColumnFooterContext:"Rodapé da Coluna {index}",accessibleColumnHeaderContext:"Cabeçalho de Coluna {index}",accessibleContainsControls:"Contém Controles",accessibleColumnsSpan:"Estende-se a {count} Colunas",accessibleEditableSummary:"Pressione F2 para focar controles somente para leitura ou Enter para começar a edição",accessibleRowContext:"Linha {index}",accessibleSortable:"{id} classificável",accessibleSortAscending:"{id} classificado(a) em ordem crescente",accessibleSortDescending:"{id} classificado em ordem decrescente",accessibleStateSelected:"selecionado",accessibleStateUnselected:"desmarcado",accessibleSummaryEstimate:"Tabela com {colnum} colunas e mais de {rownum} linhas",accessibleSummaryExact:"Tabela com {colnum} colunas e {rownum} linhas",labelAccSelectionAffordanceTop:"Handle de seleção superior",labelAccSelectionAffordanceBottom:"Handle de seleção inferior",labelEnableNonContiguousSelection:"Ativar Seleção Não Contígua",labelDisableNonContiguousSelection:"Desativar Seleção Não Contígua",labelResize:"Redimensionar",labelResizeColumn:"Redimensionar Coluna",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Cancelar",labelResizePopupSpinner:"Redimensionar Coluna",labelResizeColumnDialog:"Redimensionar coluna",labelColumnWidth:"Largura em Pixels",labelResizeDialogApply:"Aplicar",labelSelectRow:"Selecionar Linha",labelSelectAllRows:"Selecionar Todas as Linhas",labelEditRow:"Editar Linha",labelSelectAndEditRow:"Selecionar e Editar Linha",labelSelectColumn:"Selecionar Coluna",labelSort:"Classificar",labelSortAsc:"Classificar por Ordem Crescente",labelSortDsc:"Classificar por Ordem Decrescente",msgFetchingData:"Extraindo Dados...",msgNoData:"Nenhum dado a ser exibido.",msgInitializing:"Inicializando...",msgColumnResizeWidthValidation:"O valor da largura deve ser um número inteiro.",msgScrollPolicyMaxCountSummary:"O número máximo de linhas para rolagem da tabela foi excedido.",msgScrollPolicyMaxCountDetail:"Recarregue com um conjunto de dados menor.",msgStatusSortAscending:"{0} classificado(a) em ordem crescente.",msgStatusSortDescending:"{0} classificado em ordem decrescente.",tooltipRequired:"Obrigatório"},"oj-ojTabs":{labelCut:"Recortar",labelPasteBefore:"Colar Antes",labelPasteAfter:"Colar Depois",labelRemove:"Remover",labelReorder:"Reordenar",removeCueText:"Removível"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Selecione um valor."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Selecione um valor."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Selecione um valor."},searchField:"Pesquisar campo",noMatchesFound:"Nenhuma correspondência encontrada",noMoreResults:"Sem mais resultados",oneMatchesFound:"Uma correspondência encontrada",moreMatchesFound:"{num} correspondências encontradas",filterFurther:"Mais resultados disponíveis. Filtre mais detalhadamente."},"oj-ojSwitch":{SwitchON:"Ativado",SwitchOFF:"Desativado"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nenhuma correspondência encontrada",noMoreResults:"Sem mais resultados",oneMatchesFound:"Uma correspondência encontrada",moreMatchesFound:"{num} correspondências encontradas",filterFurther:"Mais resultados disponíveis. Filtre mais detalhadamente."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Selecione um valor."},noMatchesFound:"Nenhuma correspondência encontrada",oneMatchFound:"Uma correspondência encontrada",multipleMatchesFound:"{num} correspondências encontradas",nOrMoreMatchesFound:"{num} ou mais correspondências encontradas",cancel:"Cancelar",labelAccOpenDropdown:"expandir",labelAccClearValue:"limpar valor",noResultsLine1:"Nenhum resultado encontrado",noResultsLine2:"Nada correspondente à sua pesquisa pôde ser encontrado."},"oj-ojInputSearch2":{cancel:"Cancelar",noSuggestionsFound:"Nenhuma sugestão encontrada"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nenhuma correspondência encontrada",oneMatchesFound:"Uma correspondência encontrada",moreMatchesFound:"{num} correspondências encontradas"},"oj-ojTreeView":{treeViewSelectorAria:"Seletor de View em Árvore {rowKey}",retrievingDataAria:"Recuperando dados para o nó: {nodeText}",receivedDataAria:"Dados recebidos para o nó: {nodeText}"},"oj-ojTree":{stateLoading:"Carregando...",labelNewNode:"Novo Nó",labelMultiSelection:"Seleção Múltipla",labelEdit:"Editar",labelCreate:"Criar",labelCut:"Recortar",labelCopy:"Copiar",labelPaste:"Colar",labelPasteAfter:"Colar Depois",labelPasteBefore:"Colar Antes",labelRemove:"Remover",labelRename:"Renomear",labelNoData:"Não há dados"},"oj-ojPagingControl":{labelAccPaging:"Paginação",labelAccPageNumber:"Conteúdo da página {pageNum} carregado",labelAccNavFirstPage:"Primeira Página",labelAccNavLastPage:"Última Página",labelAccNavNextPage:"Próxima Página",labelAccNavPreviousPage:"Página Anterior",labelAccNavPage:"Página",labelLoadMore:"Mostrar Mais...",labelLoadMoreMaxRows:"Foi Atingido o Limite Máximo de {maxRows} linhas",labelNavInputPage:"Página",labelNavInputPageMax:"de {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} de {pageMax} itens",fullMsgItemRangeAtLeast:"Páginas {pageFrom}-{pageTo} de pelo menos {pageMax} itens",fullMsgItemRangeApprox:"Páginas {pageFrom}-{pageTo} de aproximadamente {pageMax} itens",msgItemRangeNoTotal:"{pageFrom}-{pageTo} itens",fullMsgItem:"{pageTo} de {pageMax} itens",fullMsgItemAtLeast:"Página {pageTo} de pelo menos {pageMax} itens",fullMsgItemApprox:"Página {pageTo} de aproximadamente {pageMax} itens",msgItemNoTotal:"{pageTo} itens",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"de",msgItemRangeOfAtLeast:"de pelo menos",msgItemRangeOfApprox:"de aprox.",msgItemRangeItems:"itens",tipNavInputPage:"Ir para Página",tipNavPageLink:"Ir para a Página {pageNum}",tipNavNextPage:"Próximo",tipNavPreviousPage:"Anterior",tipNavFirstPage:"Primeiro",tipNavLastPage:"Último",pageInvalid:{summary:"O valor informado da página é inválido.",detail:"Informe um valor maior que 0."},maxPageLinksInvalid:{summary:"O valor de maxPageLinks é inválido.",detail:"Informe um valor maior que 4."}},"oj-ojMasonryLayout":{labelCut:"Recortar",labelPasteBefore:"Colar Antes",labelPasteAfter:"Colar Depois"},"oj-panel":{labelAccButtonExpand:"Expandir",labelAccButtonCollapse:"Contrair",labelAccButtonRemove:"Remover",labelAccFlipForward:"Inverter para a frente",labelAccFlipBack:"Inverter para trás",tipDragToReorder:"Arrastar para reordenar",labelAccDragToReorder:"Arraste para reordenar; menu de contexto disponível"},"oj-ojChart":{labelDefaultGroupName:"Grupo {0}",labelSeries:"Série",labelGroup:"Grupo",labelDate:"Data",labelValue:"Valor",labelTargetValue:"Destino",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Porcentagem",labelLow:"Baixa",labelHigh:"Alta",labelOpen:"Abrir",labelClose:"Fechar",labelVolume:"Volume",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Mín.",labelMax:"Máx.",labelOther:"Outros",tooltipPan:"Panorâmico",tooltipSelect:"Seleção de retângulo de marcação",tooltipZoom:"Zoom de retângulo de marcação",componentName:"Gráfico"},"oj-dvtBaseGauge":{componentName:"Gauge"},"oj-ojDiagram":{promotedLink:"{0} link",promotedLinks:"{0} links",promotedLinkAriaDesc:"Indireto",componentName:"Diagrama"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} dias",accessibleDurationHours:"{0} horas",accessibleTaskInfo:"O horário de início é {0}, o horário de término é {1}, a duração é {2}",accessibleMilestoneInfo:"O horário é {0}",accessibleRowInfo:"Linha {0}",accessibleTaskTypeMilestone:"Marco",accessibleTaskTypeSummary:"Resumo",accessiblePredecessorInfo:"{0} predecessores",accessibleSuccessorInfo:"{0} sucessores",accessibleDependencyInfo:"Tipo de dependência {0}, conecta {1} a {2}",startStartDependencyAriaDesc:"início a início",startFinishDependencyAriaDesc:"início ao fim",finishStartDependencyAriaDesc:"fim ao início",finishFinishDependencyAriaDesc:"fim ao fim",tooltipZoomIn:"Mais Zoom",tooltipZoomOut:"Menos Zoom",labelLevel:"Nível",labelRow:"Linha",labelStart:"Início",labelEnd:"Fim",labelDate:"Data",labelBaselineStart:"Início da Linha de Base",labelBaselineEnd:"Fim da Linha de Base",labelBaselineDate:"Data da Linha de Base",labelDowntimeStart:"Início do Período de Inatividade",labelDowntimeEnd:"Fim do Período de Inatividade",labelOvertimeStart:"Início da Hora Extra",labelOvertimeEnd:"Fim da Hora Extra",labelAttribute:"Atributo",labelLabel:"Label",labelProgress:"Andamento",labelMoveBy:"Mover por",labelResizeBy:"Redimensionar por",taskMoveInitiated:"Movimentação da tarefa iniciada",taskResizeEndInitiated:"Final de redimensionamento de tarefa iniciado",taskResizeStartInitiated:"Início de redimensionamento de tarefa iniciado",taskMoveSelectionInfo:"{0} outros itens selecionados",taskResizeSelectionInfo:"{0} outros itens selecionados",taskMoveInitiatedInstruction:"Use as teclas de seta para mover",taskResizeInitiatedInstruction:"Use as teclas de seta para redimensionar",taskMoveFinalized:"Movimentação de tarefa finalizada",taskResizeFinalized:"Redimensionamento de tarefa finalizado",taskMoveCancelled:"Movimentação de tarefa cancelada",taskResizeCancelled:"Redimensionamento de tarefa cancelado",taskResizeStartHandle:"Handle de início de redimensionamento de tarefa",taskResizeEndHandle:"Handle de final de redimensionamento de tarefa"},"oj-ojLegend":{componentName:"Legenda",tooltipExpand:"Expandir",tooltipCollapse:"Contrair",labelInvalidData:"Dados inválidos",labelNoData:"Nenhum dado a ser exibido",labelClearSelection:"Limpar Seleção",stateSelected:"Selecionado",stateUnselected:"Não Selecionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateIsolated:"Isolado",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contém Controles"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Outros",labelGroup:"Grupo",labelSize:"Tamanho",labelAdditionalData:"Dados Adicionais",componentName:"Caixa {0}"},"oj-ojPictoChart":{componentName:"Imagem de Gráfico"},"oj-ojSparkChart":{componentName:"Gráfico"},"oj-ojSunburst":{labelColor:"Cor",labelSize:"Tamanho",tooltipExpand:"Expandir",tooltipCollapse:"Contrair",componentName:"Explosão solar"},"oj-ojTagCloud":{componentName:"Tag Cloud",accessibleContainsControls:"Contém Controles",labelCountWithTotal:"{0} de {1}",labelInvalidData:"Dados inválidos",stateCollapsed:"Contraído",stateDrillable:"Pode ter drill",stateExpanded:"Expandido",stateIsolated:"Isolado",stateHidden:"Oculto",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateVisible:"Visível"},"oj-ojThematicMap":{componentName:"Mapa Temático",areasRegion:"Áreas",linksRegion:"Links",markersRegion:"Marcadores"},"oj-ojTimeAxis":{componentName:"Eixo de Tempo"},"oj-ojTimeline":{componentName:"Linha do Tempo",stateMinimized:"Minimizado",stateMaximized:"Maximizado",stateIsolated:"Isolado",stateHidden:"Oculto",stateExpanded:"Expandido",stateVisible:"Visível",stateDrillable:"Pode ter drill",stateCollapsed:"Contraído",labelCountWithTotal:"{0} de {1}",accessibleItemDesc:"A descrição é {0}.",accessibleItemEnd:"O horário de término é {0}.",accessibleItemStart:"O horário de início é {0}.",accessibleItemTitle:"O título é {0}.",labelSeries:"Série",tooltipZoomIn:"Mais Zoom",tooltipZoomOut:"Menos Zoom",labelStart:"Início",labelEnd:"Fim",labelAccNavNextPage:"Próxima Página",labelAccNavPreviousPage:"Página Anterior",tipArrowNextPage:"Próximo",tipArrowPreviousPage:"Anterior",navArrowDisabledState:"Desativada",labelDate:"Data",labelTitle:"Título",labelDescription:"Descrição",labelMoveBy:"Mover por",labelResizeBy:"Redimensionar por",itemMoveInitiated:"Movimentação do evento iniciada",itemResizeEndInitiated:"Final de redimensionamento de evento iniciado",itemResizeStartInitiated:"Início de redimensionamento de evento iniciado",itemMoveSelectionInfo:"{0} outros itens selecionados",itemResizeSelectionInfo:"{0} outros itens selecionados",itemMoveInitiatedInstruction:"Use as teclas de seta para mover",itemResizeInitiatedInstruction:"Use as teclas de seta para redimensionar",itemMoveFinalized:"Movimentação do evento finalizada",itemResizeFinalized:"Redimensionamento do evento finalizado",itemMoveCancelled:"Movimentação do evento cancelada",itemResizeCancelled:"Redimensionamento do evento cancelado",itemResizeStartHandle:"Handle de início de redimensionamento de evento",itemResizeEndHandle:"Handle de fim de redimensionamento de evento"},"oj-ojTreemap":{labelColor:"Cor",labelSize:"Tamanho",tooltipIsolate:"Isolar",tooltipRestore:"Restaurar",componentName:"Mapa de Árvore"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Dados inválidos",labelNoData:"Nenhum dado a ser exibido",labelClearSelection:"Limpar Seleção",labelDataVisualization:"Visualização de Dados",stateSelected:"Selecionado",stateUnselected:"Não Selecionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Expandido",stateCollapsed:"Contraído",stateIsolated:"Isolado",stateHidden:"Oculto",stateVisible:"Visível",stateDrillable:"Disponível para drill",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contém Controles"},"oj-ojRatingGauge":{labelClearSelection:"Limpar Seleção",stateSelected:"Selecionado",stateUnselected:"Não Selecionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Expandido",stateCollapsed:"Contraído",stateIsolated:"Isolado",stateHidden:"Oculto",stateVisible:"Visível",stateDrillable:"Pode ter drill",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contém Controles"},"oj-ojStatusMeterGauge":{labelClearSelection:"Limpar Seleção",stateSelected:"Selecionado",stateUnselected:"Não Selecionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Expandido",stateCollapsed:"Contraído",stateIsolated:"Isolado",stateHidden:"Oculto",stateVisible:"Visível",stateDrillable:"Pode ter drill",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contém Controles"},"oj-ojNavigationList":{defaultRootLabel:"Lista de Navegação",hierMenuBtnLabel:"Botão Menu Hierárquico",selectedLabel:"selecionado",previousIcon:"Anterior",msgFetchingData:"Extraindo Dados...",msgNoData:"Não há itens para exibição.",overflowItemLabel:"Mais",accessibleReorderTouchInstructionText:"Toque duas vezes e mantenha. Aguarde o sinal sonoro e depois arraste para reorganizar.",accessibleReorderBeforeItem:"Antes {item}",accessibleReorderAfterItem:"Após {item}",labelCut:"Recortar",labelPasteBefore:"Colar Antes",labelPasteAfter:"Colar Depois",labelRemove:"Remover",removeCueText:"Removível",accessibleExpandCollapseInstructionText:"Use as teclas de seta para expandir e contrair."},"oj-ojSlider":{noValue:"ojSlider não tem valor",maxMin:"O valor máximo não deve ser menor que ou igual ao mínimo",startEnd:"value.start não deve ser maior que value.end",valueRange:"O valor deve estar dentro da faixa de mín. e máx.",optionNum:"A opção {option} não é um número",invalidStep:"Etapa inválida; deve ser > 0",lowerValueThumb:"miniatura de valor mais baixo",higherValueThumb:"miniatura de valor mais alto"},"oj-ojDialog":{labelCloseIcon:"Fechar"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Inserindo pop-up. Pressione F6 para navegar entre o pop-up e o controle associado.",ariaLiveRegionInitialFocusNone:"Pop-up aberto. Pressione F6 para navegar entre o pop-up e o controle associado.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Inserindo pop-up. O pop-up pode ser fechado navegando até o último link dentro do pop-up.",ariaLiveRegionInitialFocusNoneTouch:"Pop-up aberto. Navegue até o próximo link para estabelecer o foco dentro do pop-up.",ariaFocusSkipLink:"Toque 2 vezes para navegar até o pop-up aberto.",ariaCloseSkipLink:"Toque 2 vezes para fechar o pop-up aberto."},"oj-ojRefresher":{ariaRefreshLink:"Ativar link para atualizar o conteúdo",ariaRefreshingLink:"Atualizando o conteúdo",ariaRefreshCompleteLink:"Atualização concluída"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Mostrar ações iniciais",ariaShowEndActionsDescription:"Mostrar ações finais",ariaHideActionsDescription:"Ocultar ações"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Nenhum cabeçalho de grupo correspondente",ariaOthersLabel:"número",ariaInBetweenText:"Entre {first} e {second}",ariaKeyboardInstructionText:"Pressione enter para selecionar um valor.",ariaTouchInstructionText:"Toque duas vezes e mantenha para entrar no modo de gestos. Em seguida, arraste para cima ou para baixo para ajustar o valor."},"oj-ojMenu":{labelCancel:"Cancelar",ariaFocusSkipLink:"O foco está dentro do menu; toque duas vezes ou deslize o dedo rapidamente para mover o foco até o primeiro item do menu."},"oj-ojColorSpectrum":{labelHue:"Matiz",labelOpacity:"Opacidade",labelSatLum:"Saturação/Luminosidade",labelThumbDesc:"Controle deslizante com quatro direções para espectro de cores."},"oj-ojColorPalette":{labelNone:"Nenhum"},"oj-ojColorPicker":{labelSwatches:"Amostras",labelCustomColors:"Cores Personalizadas",labelPrevColor:"Cor Anterior",labelDefColor:"Cor Padrão",labelDelete:"Excluir",labelDeleteQ:"Excluir?",labelAdd:"Adicionar",labelAddColor:"Adicionar cor",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Matiz",labelSliderSaturation:"Saturação",labelSliderSat:"Sat",labelSliderLightness:"Clareza",labelSliderLum:"Luminosidade",labelSliderAlpha:"Alfa",labelOpacity:"Opacidade",labelSliderRed:"Vermelho",labelSliderGreen:"Verde",labelSliderBlue:"Azul"},"oj-ojFilePicker":{dropzoneText:"Solte os arquivos aqui ou clique para fazer upload",singleFileUploadError:"Faz upload um arquivo por vez.",singleFileTypeUploadError:"Não é possível fazer upload de arquivos do tipo {fileType}.",multipleFileTypeUploadError:"Não é possível fazer upload de arquivos do tipo {fileTypes}.",dropzonePrimaryText:"Arrastar e Soltar",secondaryDropzoneText:"Selecione um arquivo ou solte um aqui.",secondaryDropzoneTextMultiple:"Selecione ou solte arquivos aqui.",unknownFileType:"desconhecido"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Em Andamento"},"oj-ojMessage":{labelCloseIcon:"Fechar",categories:{error:"Erro",warning:"Advertência",info:"Informações",confirmation:"Confirmação",none:"Nenhum"}},"oj-ojMessages":{labelLandmark:"Mensagens",ariaLiveRegion:{navigationFromKeyboard:"Entrando na área de mensagens. Pressione F6 para navegar de volta ao elemento focado anteriormente.",navigationToTouch:"A área de mensagens tem novas mensagens. Use o rotor do voice-over para navegar até o ponto de referência das mensagens.",navigationToKeyboard:"A área de mensagens tem novas mensagens. Pressione F6 para navegar até a área de mensagens mais recentes.",newMessage:"Categoria de mensagem {category}. {summary}. {detail}.",noDetail:"Os detalhes não estão disponíveis"}},"oj-ojMessageBanner":{close:"Fechar",navigationFromMessagesRegion:"Entrando na área de mensagens. Pressione F6 para navegar de volta ao elemento focado anteriormente.",navigationToMessagesRegion:"A área de mensagens tem novas mensagens. Pressione F6 para navegar até a área de mensagens mais recentes.",error:"Erro",warning:"Advertência",info:"Informações",confirmation:"Confirmação"},"oj-ojConveyorBelt":{tipArrowNext:"Próximo",tipArrowPrevious:"Anterior"},"oj-ojTrain":{stepInfo:"Etapa {index} de {count}.",stepStatus:"Status: {status}.",stepCurrent:"Atual",stepVisited:"Visitados",stepNotVisited:"Não visitada",stepDisabled:"Desativada",stepMessageType:"Tipo de mensagem: {messageType}.",stepMessageConfirmation:"Confirmada",stepMessageInfo:"Informações",stepMessageWarning:"Advertência",stepMessageError:"Erro"}});