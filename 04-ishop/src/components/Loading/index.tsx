import Image from "next/image";
import { LoadingContainer } from "./styles";
import loadingImage1 from "../../assets/loading-01.svg"
import loadingImage2 from "../../assets/loading-02.svg"
import loadingImage3 from "../../assets/loading-03.svg"

export function Loading(){
  return(
    <LoadingContainer>
      <Image src={loadingImage1} alt="Loading" />
      <div>
        <Image src={loadingImage2} alt="Loading" />
        <Image src={loadingImage3} alt="Loading" />
      </div>
    </LoadingContainer>
  )
}