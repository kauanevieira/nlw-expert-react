# NLW Expert (React)

Essa aplicação foi desenvolvida durante o NLW Experts da Rocketseat utilizando React, TypeScript, Tailwind.

## Executando

Após clonar o repositório, acesse a pasta do projeto e execute os comandos abaixo:

```sh
npm install
npm run dev
```

# Aula 1

É hora de começar nosso projeto! Vamos montar o setup do projeto utilizando Vite e Tailwind. E para colocar a mão na massa, vamos dar início à interface de forma estática e conhecer um dos primeiros pilares do React: componentização.

## Vite
```sh
npm create vite@latest
```

## Tailwind
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# Aula 2

A decolagem foi um sucesso e agora é hora de avançar. Para evoluir nosso projeto, vamos entender mais sobre propriedades e estado, além de conhecer e usar as bibliotecas Radix UI (para uso de modal), date-fns (para tratamento de datas) e Sonner (para exibição de toasts).

## Radix

```sh
npm install @radix-ui/react-dialog
```

## Date-FNS

```sh
npm install date-fns
```

## Pacote de icones

```sh
npm install lucide-react
```

## Sonner

```sh
npm install sonner
```

# Aula 3

O próximo nível está cada vez mais próximo! Finalmente vamos conhecer o SpeechRecognition, API que vai transformar o áudio do usuário em notas. Além disso, vamos implementar o conceito de Lifting State Up para o gerenciamento de notas e a persistência dos dados utilizando LocalStorage.

## Speech Recognition
```sh
npm install -D @types/dom-speech-recognition
```