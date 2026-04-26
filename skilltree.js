function solution(skill, skill_trees) {
    var answer = 0;
    
    for (var i = 0; i < skill_trees.length; i++) {
        var tree = skill_trees[i];
        var check = "";
        
        for (var j = 0; j < tree.length; j++) {
            if (skill.includes(tree[j])) {
                check += tree[j];
            }
        }
        
        if (skill.indexOf(check) === 0) {
            answer++;
        }
    }
    
    return answer;
}
