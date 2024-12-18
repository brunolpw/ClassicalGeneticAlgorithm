util = {
    randomPos() {
        return Math.floor(Math.random() * (canvas.width - 30));
    },

    randomGene() {
        const letters = '0123456789ABCDEF';
        return letters[Math.floor(Math.random() * 16)];
    },

    randomColor() {
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += util.randomGene();
        }
        return color;
    },

    randomInt(_maxValue = 1) {
        return Math.floor(Math.random() * _maxValue);
    },

    randomDouble(_maxValue = 1, _floatPoint = 2) {
        return Number((Math.random() * _maxValue).toFixed(_floatPoint));
    },

    clear(_context) {
        _context.fillStyle = '#FFFFFF';
        _context.clearRect(0, 0, canvas.width, canvas.height);
    },

    formatBestGeneText(_gene = '', _solution = '') {
        const lettersSolution = _solution.split('');
        const lettersGene = _gene.split('');

        return lettersSolution
            .map((solution, i) => solution === lettersGene[ i ]
                ? `<strong>${lettersGene[ i ]}</strong>`
                : lettersGene[ i ])
            .join()
            .replaceAll(',', '')
    }
}