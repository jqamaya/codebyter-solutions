<?php
// insert '5' digit to get the largest number from the given N
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($N) {
    // Implement your solution here
    $digit_insert = 5;
    $num_arr = array_map('intval', str_split($N));
    $length = count($num_arr);

    $res = [];
    $rem = [];
    $i = 0;

    while ($i < $length && $digit_insert <= $num_arr[$i]) {
        array_push($res, $num_arr[$i]);
        ++$i;
    }
    array_push($res, $digit_insert);

    while ($i < $length) {
        array_push($res, $num_arr[$i]);
        ++$i;
    }

    return (int)implode("", $res);
}
