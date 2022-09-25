function createModal() {
    const modalContainer = document.createElement('section')
    const contentContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const closeModal = document.createElement('button')
    const divImg = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const userDate = document.createElement('div')
    const nameUser = document.createElement('h3')
    const jobUser = document.createElement('p')
    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')


    modalContainer.id = 'modal_container'
    closeModal.innerText = 'X'

    divImg.classList = 'div-logged-user'
    img.scr = '../../assets/img/user1.svg'
    img.alt = 'Foto do Usuário'

    nameUser.innerText =


    buttonContainer.appendChild(closeModal)
    figure.appendChild(img)
    divImg.appendChild(figure)
    userDate.append(nameUser, jobUser)
    article.appendChild(h2, p)
    contentContainer.append(buttonContainer, divImg, article)
    modalContainer.appendChild(contentContainer)
}


function createModal() {

    const userPost = document.querySelector('.user-post')
    const divLoggedUser = document.querySelector('.div-logged-user')
    const figure = document.querySelector('.div-logged-user')
    const img = document.querySelector('.div-logged-user')
    const divUserDate = document.querySelector('.div-logged-user')
    const h3 = document.querySelector('.div-logged-user')

    
}
