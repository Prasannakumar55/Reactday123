import React from 'react'

const AxiosFetch = () => {
  return (
    <div>
      <table border={0}> 
        <th>Axios  <br/> <br/> <br/>
        <li>we are using the fetch method to request post data from the 
            resource endpoint as seen in the useEffect Hook.</li> <br/> 
        <li>This operation returns a promise that could either resolve or reject.</li> <br/>
        <li>If it resolves, we handle the response by using . then(method) .</li> <br/>
        <li>If it reject, we handle the response by using . catch(method) .</li> <br/>
        </th>

        <th>Fitch <br/> <br/> <br/>
        <li>In ReactJS, Axios is a library that serves to create HTTP requests that are present externally.</li> <br/>
        <li>Axios can make a GET, POST and DELETE requests to “get” data from a server API. </li> <br/>
        <li>The get() method requires two parameters to be supplied to it.</li> <br/>
        <li>First, it needs the URI of the service endpoint.</li> <br/>
        <li>Second, it should be passed an object that contains the properties we want to send to our server.</li> 
        </th>

      </table>
    </div>
  )
}

export default AxiosFetch