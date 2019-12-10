window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQD0r9rN_sncVlKViiNRxU9P5fHZB6pIJg_UGE3-tKOyhDoC5cdLV1PxRd1PKFUZrg6yal9yor5WFmksIxhcOw_vQfUlSlfyGddR82pTUAmXqgE_DgrVpxusgNAsc10ZSLosZ0NbO3tWlOXc2M53d85cagJQlyIweu9XndanHceOuYHKYkVHFpY';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
            cb(token);
        }
    });

    // Error handling
    player.addListener('initialization_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('authentication_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('account_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('playback_error', ({
        message
    }) => {
        console.error(message);
    });

    // Playback status updates
    player.addListener('player_state_changed', state => {
        console.log(state);
    });

    // Ready
    player.addListener('ready', ({
        device_id
    }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({
        device_id
    }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
};