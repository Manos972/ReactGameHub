const getCropImageUrl = ( url: string | null ) => {
	if ( !url ) {
		// retorn null or a default value
		return null;
	}
	const target = "media/";
	const index = url.indexOf( target ) + target.length;
	return url.substring( 0, index ) + "crop/600/400/" + url.substring( index );
};
export default getCropImageUrl;