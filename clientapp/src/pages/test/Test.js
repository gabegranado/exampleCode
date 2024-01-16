import  React, {useState, useEffect} from  "react"
import  *  as  Realm  from  "realm-web";
import { useDispatch } from "react-redux";
import { getSensorData } from "../../actions/sensorData";
import { useParams } from "react-router-dom";

const Test = () => {
   const dispatch = useDispatch();
   const  app = new  Realm.App({ id:  "application-0-kiwue"});
   const [user, setUser] = useState();
   const [events, setEvents] = useState([]);
   const params = useParams();
   console.log("test");
   console.log(params);
   var sensorId;
   for (var key in params) {
       if (key === "sensorId") {
           sensorId = params[key];
       }
     }

   useEffect(() => {
    const  login = async () => {
    // Authenticate anonymously
    const  user = await  app.logIn(Realm.Credentials.anonymous());
    setUser(user);
    
    // Connect to the database
    const  mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const  collection = mongodb.db("test").collection("tests");
    
    // Everytime a change happens in the stream, add it to the list of events
    for  await (const  change  of  collection.watch()) {
    setEvents(events  => [...events, change]);
    }
    }
        login();
    }, []);

    return (
        <div  className="Test">
            {!!user &&
            <div  className="App-header">
            <h1>Connected as user ${user.id}</h1>
                <div>
                    <p>Latest events:</p>
                    <table>
                        <thead>
                        <tr><td>Operation</td><td>Document Key</td><td>Full Document</td></tr>
                        </thead>
                        <tbody>
                        {events.map((e, i) => (
                            <tr  key={i}><td>{e.operationType}</td><td>{e.documentKey._id.toString()}</td><td>{JSON.stringify(e.fullDocument)}</td></tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
            }
        </div>
    );
  };
  
  export default Test;