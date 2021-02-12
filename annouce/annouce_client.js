RegisterCommand('annouce', (source, args) => {
    emitNet('annouce', args.join(' '))
})