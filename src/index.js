module.exports = function check(str, bracketsConfig) {
  let o_br = [];
  let cl_br = [];
  let temp = [];
  let counter = 0;
  for(let i=0; i<bracketsConfig.length; i++)
  {
    o_br[i] = bracketsConfig[i][0];
    cl_br[i] = bracketsConfig[i][1];
  }
  for (let i=0; i<str.length;i++)
  {
    for(let j=0;j<o_br.length; j++)
    {
      if(o_br[j]===cl_br[j] && str[i]===cl_br[j])
      {
        if(str[i]===cl_br[temp[temp.length-1]])
        {
          temp.pop();
          counter--;
        }
        else
        {
          temp.push(j);
          counter++;
        }
      }
      else if(str[i]===o_br[j])
      {
        temp.push(j);
        counter++;
      }
      else if(str[i]===cl_br[j])
      {
        if(j===npmtemp.pop())
        {
          counter--;
        }
        else return false;
      }
    }
    if(counter < 0) return false;
  }
  if(counter === 0) return true;
  else return false;
}
