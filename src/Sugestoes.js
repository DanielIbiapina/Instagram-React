function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemUser} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}





export default function Sugestoes() {

    const sugestao1 = <Sugestao imagemUser ="./bad.vibes.memes.svg" user="bad.vibe.memes" />
    const sugestao2 = <Sugestao imagemUser ="./chibirdart.svg" user="chibirdart" />
    const sugestao3 = <Sugestao imagemUser ="./razoesparaacreditar.svg" user="razoesparaacreditar" />
    const sugestao4 = <Sugestao imagemUser ="./adorable_animals.svg" user="adorable.animals" />
    const sugestao5 = <Sugestao imagemUser ="./smallcutecats.svg" user="smallcutecats" />
    const sugestoes = [sugestao1, sugestao2, sugestao3, sugestao4, sugestao5]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((item) => <li>{item}</li>)}
        </div>
        
    );
}
/*<div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="./bad.vibes.memes.svg" />
                    <div class="texto">
                        <div class="nome">bad.vibes.memes</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="./chibirdart.svg" />
                    <div class="texto">
                        <div class="nome">chibirdart</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="./razoesparaacreditar.svg" />
                    <div class="texto">
                        <div class="nome">razoesparaacreditar</div>
                        <div class="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="./adorable_animals.svg" />
                    <div class="texto">
                        <div class="nome">adorable_animals</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="./smallcutecats.svg" />
                    <div class="texto">
                        <div class="nome">smallcutecats</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </div>*/