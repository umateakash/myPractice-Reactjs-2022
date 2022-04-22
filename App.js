import './App.css';
import faker from "faker";
import Comments from "./Comment/Comments";
import Review from "./Review/Review";

const App = ()=>{
  return(
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <Review btnApproveText="Yes" btnRejectText="No">
        <div>
          <h3 style={{color:'red'}}>Warning!</h3>
          <p>Are you sure you want to delete something?</p>
        </div>
      </Review>
      <Review>
        <Comments name="Matt" avatar={faker.image.image()} comment="This has been very useful for my research. Thanks as well!"/>
      </Review>
      <Review>
        <Comments name="Elliot Fu" avatar={faker.image.image()} comment="How artistic!"/>
      </Review>
      <Review>
        <Comments name="Jenny Hess" avatar={faker.image.image()} comment="Very Good!"/>
      </Review>
      <Review>
        <Comments name="Joe Henderson" avatar={faker.image.image()} comment="Dude, this is awesome. Thanks so much"/>
      </Review>
    </div>
  )}

export default App;
