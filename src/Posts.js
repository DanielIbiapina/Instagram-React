import React from 'react';


function Post(props) {

    let numero= props.numero

    function postLike(clickEvent) {
        const postElement = clickEvent.target.parentElement.parentElement;
        const likeButton =
          postElement.children[2].children[0].children[0].children[0];
        likeButton.classList.add("liked");
        likeButton.attributes[0].value = "heart";

      }
    
      function curtir(clickEvent) {
        const likeButton = clickEvent.target;
        const likeButtonClasses = likeButton.classList;
    
        if (likeButtonClasses.contains("liked")) {
          likeButtonClasses.remove("liked");
          likeButton.attributes[0].value = "heart-outline";
          numero--;

        } else {
          likeButtonClasses.add("liked");
          likeButton.attributes[0].value = "heart";
          numero++;
        }
      }

      function salvar(clickEvent) {
        const salvar = clickEvent.target;
        const salvarClasses = salvar.classList;

        if (salvarClasses.contains("liked")) {
            salvarClasses.remove("liked");
            salvar.attributes[0].value = "bookmark-outline";
  
          } else {
            salvarClasses.add("liked");
            salvar.attributes[0].value = "bookmark";
          }
        }

      
    
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUser} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemConteudo} onClick={(event) => postLike(event) }  />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={props.like} onClick={(e) => curtir(e)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" onClick={(e) => salvar(e)}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemCurtidas} />
                    <div class="texto">
                        Curtido por <strong>{props.userCurtidas}</strong> e <strong>outras {numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );

    

}








export default function Posts() {
    const post1 = <Post 
    imagemUser = "./meowed.svg" 
    user = "daniel" 
    imagemConteudo = "./gato-telefone.svg" 
    imagemCurtidas = "./meowed.svg"
    userCurtidas = "dan"
    like = "heart-outline"
    numero = "101.523"
     />

    const post2 = <Post
    imagemUser = "./meowed.svg" 
    user = "dan" 
    imagemConteudo = "./gato-telefone.svg" 
    imagemCurtidas = "./meowed.svg" 
    userCurtidas = "daniel"
    like = "heart-outline"
    numero = "204.998"
    />
    
    const posts = [post1, post2]

    

    return (
        <ul class="posts">

            {posts.map((item) => <li>{item}</li>)}

        </ul>

        /* <div class="posts">
             <div class="post">
                 <div class="topo">
                     <div class="usuario">
                         <img src="./meowed.svg" />
                         meowed
                     </div>
                     <div class="acoes">
                         <ion-icon name="ellipsis-horizontal"></ion-icon>
                     </div>
                 </div>
 
                 <div class="conteudo">
                     <img src="./gato-telefone.svg" />
                 </div>
 
                 <div class="fundo">
                     <div class="acoes">
                         <div>
                             <ion-icon name="heart-outline"></ion-icon>
                             <ion-icon name="chatbubble-outline"></ion-icon>
                             <ion-icon name="paper-plane-outline"></ion-icon>
                         </div>
                         <div>
                             <ion-icon name="bookmark-outline"></ion-icon>
                         </div>
                     </div>
 
                     <div class="curtidas">
                         <img src="./respondeai.svg" />
                         <div class="texto">
                             Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                         </div>
                     </div>
                 </div>
             </div>
 
             <div class="post">
                 <div class="topo">
                     <div class="usuario">
                         <img src="./barked.svg" />
                         barked
                     </div>
                     <div class="acoes">
                         <ion-icon name="ellipsis-horizontal"></ion-icon>
                     </div>
                 </div>
 
                 <div class="conteudo">
                     <img src="./dog.svg" />
                 </div>
 
                 <div class="fundo">
                     <div class="acoes">
                         <div>
                             <ion-icon name="heart-outline"></ion-icon>
                             <ion-icon name="chatbubble-outline"></ion-icon>
                             <ion-icon name="paper-plane-outline"></ion-icon>
                         </div>
                         <div>
                             <ion-icon name="bookmark-outline"></ion-icon>
                         </div>
                     </div>
 
                     <div class="curtidas">
                         <img src="./adorable_animals.svg" />
                         <div class="texto">
                             Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                         </div>
                     </div>
                 </div>
             </div>
         </div>*/
    );
}