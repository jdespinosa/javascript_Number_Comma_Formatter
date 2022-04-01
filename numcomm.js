function formatVal(val)
{
	// split value to whole and decimal comps
	var wVal = val.split('.')[0];
	var dVal = ( val.indexOf('.') == -1 ? '' : val.split('.')[1]);
	
	// format whole no. comp
	var vBuff = ( dVal != '' ? '.' + dVal : '' );
	var dCount = 0;
	for(var i=wVal.length-1; i>=0; i--){
		vBuff = wVal.charAt(i) + vBuff;
		dCount++;
		if( dCount == 3 && i > 0 ){
			vBuff = "," + vBuff;
			dCount = 0;
		}
	}
	
	return vBuff;
}
