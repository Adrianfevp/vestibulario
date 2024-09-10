
  // Dados dos municípios e universidades
  const municipios = {
    mg: {
      "Belo Horizonte": [
        'Universidade Federal de Minas Gerais (UFMG)',
        'Universidade do Estado de Minas Gerais (UEMG)',
        'Instituto Federal de Minas Gerais (IFMG)'
      ],
      "Uberlândia": [
        'Universidade Federal de Uberlândia (UFU)'
      ],
      "Juiz de Fora": [
        'Universidade Federal de Juiz de Fora (UFJF)'
      ],
      "Montes Claros": [
        'Universidade Estadual de Montes Claros (UNIMONTES)'
      ]
    },
    ac: {
      "Rio Branco": [
        'Universidade Federal do Acre (UFAC)',
        'Instituto Federal do Acre (IFAC)'
      ]
    },
    al: {
      "Maceió": [
        'Universidade Federal de Alagoas (UFAL)',
        'Instituto Federal de Alagoas (IFAL)'
      ]
    },
    ap: {
      "Macapá": [
        'Universidade Federal do Amapá (UNIFAP)'
      ]
    },
    am: {
      "Manaus": [
        'Universidade Federal do Amazonas (UFAM)',
        'Instituto Federal do Amazonas (IFAM)'
      ]
    },
    ba: {
      "Salvador": [
        'Universidade Federal da Bahia (UFBA)',
        'Universidade do Estado da Bahia (UNEB)',
        'Instituto Federal da Bahia (IFBA)'
      ],
      "Feira de Santana": [
        'Universidade Estadual de Feira de Santana (UEFS)'
      ],
      "Vitória da Conquista": [
        'Universidade Estadual do Sudoeste da Bahia (UESB)'
      ]
    },
    ce: {
      "Fortaleza": [
        'Universidade Federal do Ceará (UFC)',
        'Universidade Estadual do Ceará (UECE)',
        'Instituto Federal do Ceará (IFCE)'
      ]
    },
    df: {
      "Brasília": [
        'Universidade de Brasília (UnB)',
        'Instituto Federal de Brasília (IFB)'
      ]
    },
    es: {
      "Vitória": [
        'Universidade Federal do Espírito Santo (UFES)',
        'Instituto Federal do Espírito Santo (IFES)'
      ]
    },
    go: {
      "Goiânia": [
        'Universidade Federal de Goiás (UFG)',
        'Universidade Estadual de Goiás (UEG)',
        'Instituto Federal de Goiás (IFG)'
      ]
    },
    ma: {
      "São Luís": [
        'Universidade Federal do Maranhão (UFMA)',
        'Instituto Federal do Maranhão (IFMA)'
      ]
    },
    mt: {
      "Cuiabá": [
        'Universidade Federal de Mato Grosso (UFMT)',
        'Instituto Federal de Mato Grosso (IFMT)'
      ]
    },
    ms: {
      "Campo Grande": [
        'Universidade Federal de Mato Grosso do Sul (UFMS)',
        'Instituto Federal de Mato Grosso do Sul (IFMS)'
      ]
    },
    pa: {
      "Belém": [
        'Universidade Federal do Pará (UFPA)',
        'Instituto Federal do Pará (IFPA)'
      ]
    },
    pb: {
      "João Pessoa": [
        'Universidade Federal da Paraíba (UFPB)',
        'Universidade Estadual da Paraíba (UEPB)',
        'Instituto Federal da Paraíba (IFPB)'
      ]
    },
    pr: {
      "Curitiba": [
        'Universidade Federal do Paraná (UFPR)',
        'Universidade Tecnológica Federal do Paraná (UTFPR)',
        'Instituto Federal do Paraná (IFPR)'
      ],
      "Londrina": [
        'Universidade Estadual de Londrina (UEL)'
      ],
      "Ponta Grossa": [
        'Universidade Estadual de Ponta Grossa (UEPG)'
      ],
      "Maringá": [
        'Universidade Estadual de Maringá (UEM)'
      ],
      "Foz do Iguaçu": [
        'Universidade Federal da Integração Latino-Americana (UNILA)'
      ],
      "Cascavel": [
        'Universidade Estadual do Oeste do Paraná (UNIOESTE)'
      ]
    },
    pe: {
      "Recife": [
        'Universidade Federal de Pernambuco (UFPE)'
      ]
    },
    pi: {
      "Teresina": [
        'Universidade Federal do Piauí (UFPI)'
      ]
    },
    rj: {
      "Rio de Janeiro": [
        'Universidade Federal do Rio de Janeiro (UFRJ)',
        'Universidade Federal Fluminense (UFF)',
        'Universidade Federal Rural do Rio de Janeiro (UFRRJ)',
        'Instituto Federal do Rio de Janeiro (IFRJ)',
        'Universidade do Estado do Rio de Janeiro (UERJ)'
      ],
      "Niterói": [
        'Universidade Federal Fluminense (UFF)'
      ],
      "Volta Redonda": [
        'Universidade Federal Fluminense (UFF) – Campus Volta Redonda'
      ]
    },
    rn: {
      "Natal": [
        'Universidade Federal do Rio Grande do Norte (UFRN)',
        'Universidade do Estado do Rio Grande do Norte (UERN)',
        'Instituto Federal do Rio Grande do Norte (IFRN)'
      ]
    },
    rs: {
      "Porto Alegre": [
        'Universidade Federal do Rio Grande do Sul (UFRGS)',
        'Universidade Estadual do Rio Grande do Sul (UERGS)',
        'Instituto Federal do Rio Grande do Sul (IFRS)'
      ],
      "Caxias do Sul": [
        'Universidade de Caxias do Sul (UCS)'
      ]
    },
    ro: {
      "Porto Velho": [
        'Universidade Federal de Rondônia (UNIR)'
      ]
    },
    rr: {
      "Boa Vista": [
        'Universidade Federal de Roraima (UFRR)'
      ]
    },
    sc: {
      "Florianópolis": [
        'Universidade Federal de Santa Catarina (UFSC)',
        'Universidade do Estado de Santa Catarina (UDESC)',
        'Instituto Federal de Santa Catarina (IFSC)'
      ],
      "Joinville": [
        'Universidade do Estado de Santa Catarina (UDESC) – Campus Joinville'
      ]
    },
    se: {
      "Aracaju": [
        'Universidade Federal de Sergipe (UFS)'
      ]
    },
    to: {
      "Palmas": [
        'Universidade Federal do Tocantins (UFT)'
      ]
    }
  };

  // Função para exibir as universidades
  function exibirUniversidades(estado, municipio) {
    const informacoesDiv = document.getElementById('informacoes');
    informacoesDiv.innerHTML = '';

    if (estado && municipio && municipios[estado] && municipios[estado][municipio]) {
      const universidades = municipios[estado][municipio];
      const list = document.createElement('ul');
      universidades.forEach(universidade => {
        const listItem = document.createElement('li');
        listItem.textContent = universidade;
        list.appendChild(listItem);
      });
      informacoesDiv.appendChild(list);
    }
  }

  // Função para atualizar a lista de municípios
  function atualizarMunicipios() {
    const estadoSelect = document.getElementById('estado');
    const municipioSelect = document.getElementById('municipio');
    const estado = estadoSelect.value;
    municipioSelect.innerHTML = '<option value="">Selecione um município</option>';
    informacoesDiv.innerHTML = '';

    if (estado && municipios[estado]) {
      Object.keys(municipios[estado]).forEach(municipio => {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        municipioSelect.appendChild(option);
      });
    }
  }

  // Integração com jQuery
  (function($) {
    $(document).ready(function() {
      $('#map .state').click(function() {
        var estado = $(this).attr('data-state');
        var box_estado = '#box_' + estado;

        // Reseta o estado e seu label para a cor padrão
        $('.state .label_icon_state').css({ 'fill': '#666' });
        $('.state .shape').css({ 'fill': '#ddd' });

        // Colore o estado selecionado
        $('#state_' + estado + ' .label_icon_state').css({ 'fill': '#FFF' });
        $('#state_' + estado + ' .shape').css({ 'fill': '#fd7132' });

        // Verifica se o cadastro de contato do estado existe
        if ($('#box_' + estado).length == 0) {
          console.log('Não existe');
        } else {
          $('.parca .estado').addClass('some');
          $('.parca .estado').css({ 'opacity': 0, 'visibility': 'hidden' });

          $(box_estado).removeClass('some');
          $(box_estado).css({ 'opacity': 1, 'visibility': 'visible' });

          // Atualiza a lista de municípios quando um estado é clicado
          atualizarMunicipios();
        }
      });

      $('#map .state').click(function(e) {
        e.preventDefault();
      });

      // Change select responsive
      $('#seletory').change(function() {
        $('.parca .estado').css({ 'opacity': 0, 'visibility': 'hidden' });
        $('#box_' + $(this).val()).css({ 'opacity': 1, 'visibility': 'visible' });
      });

      // Eventos de mudança para os selects
      document.getElementById('estado').addEventListener('change', atualizarMunicipios);
      document.getElementById('municipio').addEventListener('change', function() {
        const estado = document.getElementById('estado').value;
        const municipio = this.value;
        exibirUniversidades(estado, municipio);
      });
    });
  })(jQuery);
