function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}

export default function Stories() {
  const stories = [
    { imagem: "./meowed.svg", usuario: "9gag" },
    { imagem: "./filomoderna.svg", usuario: "9gag" },
    { imagem: "./memeriagourmet.svg", usuario: "9gag" },
    { imagem: "./nathanwpylestrangeplanet.svg", usuario: "9gag" },
    { imagem: "./respondeai.svg", usuario: "9gag" },
    { imagem: "./wawawicomics.svg", usuario: "9gag" },
    { imagem: "./meowed.svg", usuario: "9gag" },
    { imagem: "./meowed.svg", usuario: "9gag" },
  ];

  return (
    <ul class="stories">
      {stories.map((story) => (
        <li>
          <Story imagem={story.imagem} usuario={story.usuario} />
        </li>
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </ul>
  );
}
