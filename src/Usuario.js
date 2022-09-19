import React from 'react';

function UsuarioSidebar(props) {
    const [nome, setNome] = React.useState("dan");
    const [imagemperfil, setImagemperfil] = React.useState("./catanacomics.svg");

    return (
        <div class="usuario" >
            <img src={imagemperfil} onClick={() => setImagemperfil(prompt('Qual o link da sua nova imagem de perfil?'))}/>
            <div class="texto" >
                <strong>{props.user}</strong>
                {nome} 
            </div>
            <ion-icon name="pencil-outline" onClick={() => setNome(prompt('Qual o seu nome?'))}></ion-icon>
        </div>
    );
}



export default function Usuario() {
    

    return (
    
        <UsuarioSidebar  user = "catanacomics"  />
        
    );

}