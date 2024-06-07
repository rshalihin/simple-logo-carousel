export const cssString = (css) => {
    let results = '';
    for ( const selector in css ) {
        let cssProps = '';
        for ( const property in css[selector] ) {
            if ( css[selector][property] && css[selector][property].length > 0 ) {
                cssProps += property + ':' + css[selector][property] + ';';
            }
        }
        results += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
    }
    return results;
}