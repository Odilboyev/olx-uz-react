import styled from "styled-components";

const HomeWrapper = styled.div`
  .links-container{
    margin-top: 39px;
    display: flex;
    flex-wrap: wrap;
    /* overflow-wrap: anywhere; */
    .link{
      margin: 10px 0;
      display: inline-block;
      text-align: center;
      max-width: 122px;
      flex: 0 0 122px;
      padding: 0;

      .icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 10px;

        img {
            width: 80%;
            height: auto;
        } 
      }
      
      a{
        font-size: 14px !important;
        text-decoration: none !important;
        &:hover{
          background-color: #002F34;
          color: #fff !important;
        }
      }

    }
  }

  .startbusiness{
    background-color: #002F34;
    h4{
      color: #fff !important;
    }
  }

  .olx-about{
    background-color: #CBF7EE;
    p{
      color: #002F34 !important;
    }
  }
  .text-black{
    color: #002F34 !important;
  }
  
`
export default HomeWrapper