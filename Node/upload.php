<html>
  <body>
    <form ref='uploadForm' 
      id='uploadForm' 
      action=http://<?php echo gethostbyname("LAPTOP-DKA5H59P").":3000/upload";?> 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="sampleFile" multiple />
        <input type='submit' value='Upload!' />
    </form>     
  </body>
</html>