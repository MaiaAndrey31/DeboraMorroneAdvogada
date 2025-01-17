import styled from "styled-components"

export const Container = styled.div`
min-height: auto;
width: auto;
border-radius: 15px;
background-color: rgb(255, 249, 241, .65);



.profile {
    
    display: flex;
    gap: 1rem;
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

@media (min-width: 992px) and (max-width: 1199px) {

    .review {
        p{
            font-size: 1rem;
        }
    }
 }


`