import Collection from "./component/collection";
import CommisionArt from "./component/commisionArt";
import VisualRealms from "./component/visualsRealms";
import Footer from "./component/footer";
import Experience from "./component/experience";
import Future from "./component/future";
import Vision from "./component/vision";


export default function Home() {
  return (
    <div className="pt-40">
            <h1 className="h-screen">Hello world</h1>
            <Experience/>
            <Vision/>
            <Collection/>
            <VisualRealms/>
            <CommisionArt/>
            <Future/>
            <Footer/>        
    </div>
  );
}


