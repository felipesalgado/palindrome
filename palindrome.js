function checkPalindrome(str)
{
  var lng = str.length;
  var _final = lng-1;
  var _counter = 0;
  var i = 0;

  while(_final > -1)
  {
    if(str[i] !== str[_final])
    {
      _counter++;
    }    

    i++;
    _final--;
  }

  return (_counter > 0) ? false : true;
}

