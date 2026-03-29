import { Story } from "../../domain/entities/story";

export const storyGame: Story = {
  id: "templo",
  title: "O Sussurro do Templo",
  startNodeId: "start",
  nodes: [
    {
      id: "start",
      content:
        "Você chega à entrada de um templo antigo. Há uma tocha acesa e uma porta de pedra fechada.",
      choices: [
        {
          id: "1",
          text: "Pegar a tocha",
          nextNodeId: "start",
          effects: { addItem: "tocha" },
        },
        {
          id: "2",
          text: "Entrar no templo",
          nextNodeId: "hall",
        },
      ],
    },

    {
      id: "hall",
      content:
        "O salão é escuro e silencioso. Um mago encapuzado aparece diante de você.",
      choices: [
        {
          id: "1",
          text: "Aceitar ajuda do mago",
          nextNodeId: "buff",
          effects: { addFlag: "mago_ajudou" },
        },
        {
          id: "2",
          text: "Recusar ajuda",
          nextNodeId: "curse",
          effects: { addFlag: "mago_rejeitado" },
        },
      ],
    },

    {
      id: "buff",
      content: "O mago sorri e te concede um amuleto brilhante.",
      choices: [
        {
          id: "1",
          text: "Continuar",
          nextNodeId: "corridor",
          effects: { addItem: "amuleto" },
        },
      ],
    },

    {
      id: "curse",
      content: "O mago desaparece... mas você sente um peso estranho.",
      choices: [
        {
          id: "1",
          text: "Continuar",
          nextNodeId: "corridor",
          effects: { addFlag: "amaldiçoado" },
        },
      ],
    },

    {
      id: "corridor",
      content:
        "Você encontra um corredor com uma porta trancada e um buraco na parede.",
      choices: [
        {
          id: "1",
          text: "Tentar abrir a porta",
          nextNodeId: "door_locked",
          conditions: [{ type: "hasItem", value: "chave" }],
        },
        {
          id: "2",
          text: "Explorar o buraco",
          nextNodeId: "hole",
        },
      ],
    },

    {
      id: "hole",
      content: "Dentro do buraco você encontra uma chave antiga.",
      choices: [
        {
          id: "1",
          text: "Pegar a chave",
          nextNodeId: "corridor",
          effects: { addItem: "chave" },
        },
      ],
    },

    {
      id: "door_locked",
      content: "Você abre a porta e entra em uma sala com um guardião.",
      choices: [
        {
          id: "1",
          text: "Lutar",
          nextNodeId: "fight",
        },
        {
          id: "2",
          text: "Tentar convencer o guardião",
          nextNodeId: "talk",
          conditions: [{ type: "hasItem", value: "amuleto" }],
        },
      ],
    },

    {
      id: "talk",
      content: "O guardião reconhece o amuleto e te deixa passar.",
      choices: [
        {
          id: "1",
          text: "Avançar",
          nextNodeId: "treasure",
        },
      ],
    },

    {
      id: "fight",
      content: "O guardião avança contra você.",
      choices: [
        {
          id: "1",
          text: "Atacar com coragem",
          nextNodeId: "win",
          conditions: [{ type: "hasFlag", value: "mago_ajudou" }],
        },
        {
          id: "2",
          text: "Atacar desesperadamente",
          nextNodeId: "lose",
          conditions: [{ type: "hasFlag", value: "amaldiçoado" }],
        },
      ],
    },

    {
      id: "treasure",
      content: "Você encontra o tesouro do templo. Vitória perfeita!",
      choices: [],
    },

    {
      id: "win",
      content: "Com a ajuda do mago, você derrota o guardião. Vitória!",
      choices: [],
    },

    {
      id: "lose",
      content: "A maldição te enfraquece... você foi derrotado.",
      choices: [],
    },
  ],
};
