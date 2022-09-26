
function createModal() {
    const modalContainer = document.createElement('section')
    const contentContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const closeModal = document.createElement('button')
    const divLoggedUser = document.querySelector('.div-logged-user')
    const figure = document.querySelector('.figure')
    const img = document.querySelector('.img')
    const divUserDate = document.querySelector('.div-user-date')
    const h3Name = document.querySelector('.h3-name')
    const pJob = document.querySelector('.p-job')
    const article = document.querySelector('.article-post')
    const h2Title = document.querySelector('.h2-title')
    const pArticle = document.querySelector('p-article')

    modalContainer.id = 'modal_container'

    closeModal.id = 'close_modal'
    closeModal.innerText = 'X'

    


    buttonContainer.append(closeModal)
    figure.append(img)
    divUserDate.append(h3Name, pJob)
    article.append(h2Title, pArticle)
    divLoggedUser.append(figure, divUserDate, article)
    contentContainer.append(buttonContainer, divLoggedUser)
}
