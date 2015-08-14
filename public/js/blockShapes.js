var ellDefinitions = [[[1,0,0],[1,0,0],[1,1,0]],
                      [[0,0,0],[0,0,1],[1,1,1]],
                      [[0,1,1],[0,0,1],[0,0,1]],
                      [[1,1,1],[1,0,0],[0,0,0]]]

var jayDefinitions = [[[0,0,1],[0,0,1],[0,1,1]],
                      [[1,1,1],[0,0,1],[0,0,0]],
                      [[1,1,0],[1,0,0],[1,0,0]],
                      [[0,0,0],[1,0,0],[1,1,1]]]

var teeDefinitons = [[[0,1,0],[1,1,1],[0,0,0]],
                     [[0,0,1],[0,1,1],[0,0,1]],
                     [[0,0,0],[1,1,1],[0,1,0]],
                     [[1,0,0],[1,1,0],[1,0,0]]]

var sqrDefinitons = [[[1,1,0],[1,1,0],[0,0,0]]]

var zeeDefinitions = [[[1,1,0],[0,1,1],[0,0,0]],
                                    [[0,1,0],[1,1,0],[1,0,0]]]

var essDefinitions = [[[0,1,1],[1,1,0],[0,0,0]],
                                    [[1,0,0],[1,1,0    ],[0,1,0]]]

var eyeDefinitions = [[[0,1,0],[0,1,0],[0,1,0]],
                      [[0,0,0],[1,1,1],[0,0,0]]]

blocks = [ellDefinitions, jayDefinitions, sqrDefinitons, teeDefinitons,
                     jayDefinitions, essDefinitions, eyeDefinitions]

blockStrings = ['ellDefinitions', 'jayDefinitions', 'squareDefinitons', 'teeDefinitons',
                     'jayDefinitions', 'essDefinitions', 'eyeDefinitions']

for (i=0; i<blocks.length; i++){
    set = blocks[i]
    console.log(blockStrings[i])
        for(setBlocks=0; setBlocks<set.length; setBlocks++){
            console.log("")
            console.log("rotation " + (setBlocks+1))
            console.log(set[setBlocks][0])
            console.log(set[setBlocks][1])
            console.log(set[setBlocks][2])
            if(setBlocks[3]){console.log(setBlocks[3])}
            console.log("")
        }

    // console.log(set)
}
