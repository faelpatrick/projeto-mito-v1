# Instruções para Carregar Slides

Este guia explica como carregar e organizar os slides para o Projeto Professores Maria.

## Estrutura da Pasta de Slides

Os slides devem ser armazenados na pasta `slides`. Cada um deve ter sua própria subpasta, numerada sequencialmente, como `01`, `02`, `03`, etc. Dentro de cada subpasta, coloque os arquivos da aula, como imagens, áudios e textos descritivos.

### Exemplo de Estrutura de Pasta

```
slides/
    01/
        01.png
        01.mp3
    02/
        02.png
        02.mp3
    03/
        03.png
        03.mp3
    // e assim por diante
```

## Preenchendo o arquivo `index.json`

O arquivo `index.json` serve como um índice para os slides. Para cada aula, você deve criar um objeto JSON com os seguintes campos: `slide`, `imagem`, `audio` e `texto`.

### Formato do `index.json`

```json
[
  {
    "slide": "01",
    "imagem": "slides/01/01.png",
    "audio": "slides/01/01.mp3",
    "texto": "01. [Descrição da Aula 01]"
  },
  {
    "slide": "02",
    "imagem": "slides/02/02.png",
    "audio": "slides/02/02.mp3",
    "texto": "02. [Descrição da Aula 02]"
  },
  {
    "slide": "03",
    "imagem": "slides/03/03.png",
    "audio": "slides/03/03.mp3",
    "texto": "03. [Descrição da Aula 03]"
  }
  // Adicione mais aulas conforme necessário
]
```

### Instruções de Preenchimento

1. **Slide:** Número da aula.
2. **Imagem:** Caminho relativo para a imagem do slide (dentro da pasta `slides`).
3. **Audio:** Caminho relativo para o arquivo de áudio do slide.
4. **Texto:** Texto descritivo do slide.

## Notas Finais

- Certifique-se de que os arquivos estão nomeados e organizados corretamente nas pastas correspondentes.
- Atualize o `index.json` sempre que adicionar, remover ou modificar slides.
- Os caminhos dos arquivos no `index.json` devem ser relativos à localização do arquivo HTML principal do projeto.
