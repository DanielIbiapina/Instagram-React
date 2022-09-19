export default function Stories() {
    return (
        <div class="stories">
            <div class="story">
                <div class="imagem">
                    <img src="data:image/png;base64,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" />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./meowed.svg" />
                </div>
                <div class="usuario">
                    meowed
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./barked.svg" />
                </div>
                <div class="usuario">
                    barked
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./nathanwpylestrangeplanet.svg" />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./wawawicomics.svg" />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./respondeai.svg" />
                </div>
                <div class="usuario">
                    respondeai
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./filomoderna.svg" />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="./memeriagourmet.svg" />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
            </div>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}