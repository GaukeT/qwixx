export default class ScoreCard {
    constructor(root) {
        // 1x 2x 3x 4x 5x 6x 7x 8x 9x 10x 11x 12x
        // 1  3  6  10 15 21 28 36 45 55  66  78
        this.reference = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];

        this.el = {
            // buttons red row
            br2: root.querySelector('.br2'),
            br3: root.querySelector('.br3'),
            br4: root.querySelector('.br4'),
            br5: root.querySelector('.br5'),
            br6: root.querySelector('.br6'),
            br7: root.querySelector('.br7'),
            br8: root.querySelector('.br8'),
            br9: root.querySelector('.br9'),
            br10: root.querySelector('.br10'),
            br11: root.querySelector('.br11'),
            br12: root.querySelector('.br12'),
            br13: root.querySelector('.br13'),

            // buttons yellow row
            by2: root.querySelector('.by2'),
            by3: root.querySelector('.by3'),
            by4: root.querySelector('.by4'),
            by5: root.querySelector('.by5'),
            by6: root.querySelector('.by6'),
            by7: root.querySelector('.by7'),
            by8: root.querySelector('.by8'),
            by9: root.querySelector('.by9'),
            by10: root.querySelector('.by10'),
            by11: root.querySelector('.by11'),
            by12: root.querySelector('.by12'),
            by13: root.querySelector('.by13'),

            // buttons green row
            bg2: root.querySelector('.bg2'),
            bg3: root.querySelector('.bg3'),
            bg4: root.querySelector('.bg4'),
            bg5: root.querySelector('.bg5'),
            bg6: root.querySelector('.bg6'),
            bg7: root.querySelector('.bg7'),
            bg8: root.querySelector('.bg8'),
            bg9: root.querySelector('.bg9'),
            bg10: root.querySelector('.bg10'),
            bg11: root.querySelector('.bg11'),
            bg12: root.querySelector('.bg12'),
            bg13: root.querySelector('.bg13'),

            // buttons blue row
            bb2: root.querySelector('.bb2'),
            bb3: root.querySelector('.bb3'),
            bb4: root.querySelector('.bb4'),
            bb5: root.querySelector('.bb5'),
            bb6: root.querySelector('.bb6'),
            bb7: root.querySelector('.bb7'),
            bb8: root.querySelector('.bb8'),
            bb9: root.querySelector('.bb9'),
            bb10: root.querySelector('.bb10'),
            bb11: root.querySelector('.bb11'),
            bb12: root.querySelector('.bb12'),
            bb13: root.querySelector('.bb13'),

            // scores
            s1: root.querySelector('.s1'),
            s2: root.querySelector('.s2'),
            s3: root.querySelector('.s3'),
            s4: root.querySelector('.s4'),
            s5: root.querySelector('.s5'),
        }
    }

    calculate(event, pathDepth) {
        let color = event.composedPath()[pathDepth].classList[0];
        let clickCount = 0;
        for (var elem in this.el) {
            if (elem.startsWith(color)) {
                clickCount += this.checked(this.el[elem]);
            };
        }
        this.count(color, clickCount);
        this.dispatch();
    }

    checked(element) {
        return element.classList.contains('selected');
    }

    count(color, clickCount) {
        let score = Number(this.reference[clickCount]);
        switch(color) {
            case 'br': this.el.s1.value = score;
            break;
            case 'by': this.el.s2.value = score;
            break;
            case 'bg': this.el.s3.value = score;
            break;
            case 'bb': this.el.s4.value = score;
            break;
        }
    }

    dispatch() {
        let event = new Event('input');
        this.el.s5.dispatchEvent(event);
    }
}
