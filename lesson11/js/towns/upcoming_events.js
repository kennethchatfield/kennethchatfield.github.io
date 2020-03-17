

// const build_event_item = ( event ) => {
    
//     return (`
//         <div class="event-item">
//             <div class="event-date">${ eventDate }</div>
//             <div class="event-name">${ eventName }</div>
//         </div>
//     `)
// }

const build_event_item = text => {
    let event_item = document.createElement('div');
    event_item.className = 'event-item';
    event_item.innerHTML = text;
    return event_item;
}
const build_column = ( column_data ) => {
    let event_column = document.createElement('div');
    event_column.className = 'event-column';
    column_data.map( text => {
        event_column.appendChild( build_event_item( text ) )
    })
    return event_column;
}

const format_events = ( events ) => (
    events.reduce( (result, event, index) => {
        if( index === 0 ) result = [[],[]];
        const eventInfo = event.split(":");
        result[0].push( eventInfo[0])
        result[1].push( eventInfo[1])
        return result;
    },[])
)

const display_town_events = ( event_columns ) => {
   
    const container = document.getElementById( "events" );
    event_columns.map( column_data => {
        const column = build_column( column_data );
        container.appendChild( column );
    })

    return container;
    
}

get_town_events()
    .then( format_events )
    .then( display_town_events )