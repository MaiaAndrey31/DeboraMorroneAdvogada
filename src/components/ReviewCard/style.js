import styled from "styled-components"

export const Container = styled.div`
min-height: 240px;
width: 390px;
border-radius: 15px;
background-color: rgb(255, 249, 241, .7);



.profile {
    
    display: flex;
    gap: 1rem;
    height: 60px;
    align-items: center;
     p {
        font-size: 1.4rem;
     }

}

`

export const ProfileContainer = styled.div`
display: flex;
gap: .1rem;
flex-direction: column;
padding: 1rem;

.stars{
    
    display: flex;
    
}

.review{
    display: flex;
    height: max-content ;
    padding-top: .4rem;

    p{
        font-family: 'GothamLight';
        font-size: 1.2rem;
        text-align: left;
    }
}

`