var vertex = [[ 48,0,-187
 ], [ 45,-42,-170
 ], [ 37,-59,-128
 ], [ 29,-42,-87
 ], [ 25,0,-70
 ], [ 29,42,-87
 ], [ 37,59,-128
 ], [ 45,42,-170
 ], [ 126,0,-155
 ], [ 116,-42,-140
 ], [ 93,-59,-105
 ], [ 70,-42,-70
 ], [ 60,0,-56
 ], [ 70,42,-70
 ], [ 93,59,-105
 ], [ 116,42,-140
 ], [ 185,0,-96
 ], [ 171,-42,-86
 ], [ 136,-59,-62
 ], [ 101,-42,-39
 ], [ 87,0,-29
 ], [ 101,42,-39
 ], [ 136,59,-62
 ], [ 171,42,-86
 ], [ 218,0,-18
 ], [ 201,-42,-15
 ], [ 160,-59,-6
 ], [ 119,-42,2
 ], [ 102,0,5
 ], [ 119,42,2
 ], [ 160,59,-6
 ], [ 201,42,-15
 ], [ 218,0,66
 ], [ 201,-42,63
 ], [ 160,-59,55
 ], [ 119,-42,46
 ], [ 102,0,43
 ], [ 119,42,46
 ], [ 160,59,55
 ], [ 201,42,63
 ], [ 186,0,144
 ], [ 172,-42,134
 ], [ 137,-59,111
 ], [ 102,-42,88
 ], [ 87,0,78
 ], [ 102,42,88
 ], [ 137,59,111
 ], [ 172,42,134
 ], [ 127,0,203
 ], [ 117,-42,189
 ], [ 94,-59,154
 ], [ 71,-42,119
 ], [ 61,0,105
 ], [ 71,42,119
 ], [ 94,59,154
 ], [ 117,42,189
 ], [ 50,0,236
 ], [ 46,-42,219
 ], [ 38,-59,178
 ], [ 30,-42,136
 ], [ 26,0,119
 ], [ 30,42,136
 ], [ 38,59,178
 ], [ 46,42,219
 ], [ -34,0,236
 ], [ -31,-42,219
 ], [ -23,-59,178
 ], [ -15,-42,137
 ], [ -12,0,120
 ], [ -15,42,137
 ], [ -23,59,178
 ], [ -31,42,219
 ], [ -112,0,204
 ], [ -102,-42,190
 ], [ -79,-59,155
 ], [ -56,-42,120
 ], [ -47,0,105
 ], [ -56,42,120
 ], [ -79,59,155
 ], [ -102,42,190
 ], [ -172,0,145
 ], [ -157,-42,135
 ], [ -122,-59,112
 ], [ -88,-42,88
 ], [ -73,0,79
 ], [ -88,42,88
 ], [ -122,59,112
 ], [ -157,42,135
 ], [ -204,0,68
 ], [ -187,-42,64
 ], [ -146,-59,56
 ], [ -105,-42,47
 ], [ -88,0,44
 ], [ -105,42,47
 ], [ -146,59,56
 ], [ -187,42,64
 ], [ -204,0,-16
 ], [ -187,-42,-13
 ], [ -146,-59,-5
 ], [ -105,-42,3
 ], [ -88,0,6
 ], [ -105,42,3
 ], [ -146,59,-5
 ], [ -187,42,-13
 ], [ -173,0,-94
 ], [ -158,-42,-85
 ], [ -123,-59,-61
 ], [ -88,-42,-38
 ], [ -74,0,-29
 ], [ -88,42,-38
 ], [ -123,59,-61
 ], [ -158,42,-85
 ], [ -113,0,-154
 ], [ -104,-42,-139
 ], [ -80,-59,-105
 ], [ -57,-42,-70
 ], [ -47,0,-55
 ], [ -57,42,-70
 ], [ -80,59,-105
 ], [ -104,42,-139
 ], [ -36,0,-186
 ], [ -33,-42,-169
 ], [ -24,-59,-128
 ], [ -16,-42,-87
 ], [ -12,0,-70
 ], [ -16,42,-87
 ], [ -24,59,-128
 ], [ -33,42,-169
]];

var faces = [[     0,    9,    1
 ], [     0,    8,    9
 ], [     1,   10,    2
 ], [     1,    9,   10
 ], [     2,   11,    3
 ], [     2,   10,   11
 ], [     3,   12,    4
 ], [     3,   11,   12
 ], [     4,   13,    5
 ], [     4,   12,   13
 ], [     5,   14,    6
 ], [     5,   13,   14
 ], [     6,   15,    7
 ], [     6,   14,   15
 ], [     7,    8,    0
 ], [     7,   15,    8
 ], [     8,   17,    9
 ], [     8,   16,   17
 ], [     9,   18,   10
 ], [     9,   17,   18
 ], [    10,   19,   11
 ], [    10,   18,   19
 ], [    11,   20,   12
 ], [    11,   19,   20
 ], [    12,   21,   13
 ], [    12,   20,   21
 ], [    13,   22,   14
 ], [    13,   21,   22
 ], [    14,   23,   15
 ], [    14,   22,   23
 ], [    15,   16,    8
 ], [    15,   23,   16
 ], [    16,   25,   17
 ], [    16,   24,   25
 ], [    17,   26,   18
 ], [    17,   25,   26
 ], [    18,   27,   19
 ], [    18,   26,   27
 ], [    19,   28,   20
 ], [    19,   27,   28
 ], [    20,   29,   21
 ], [    20,   28,   29
 ], [    21,   30,   22
 ], [    21,   29,   30
 ], [    22,   31,   23
 ], [    22,   30,   31
 ], [    23,   24,   16
 ], [    23,   31,   24
 ], [    24,   33,   25
 ], [    24,   32,   33
 ], [    25,   34,   26
 ], [    25,   33,   34
 ], [    26,   35,   27
 ], [    26,   34,   35
 ], [    27,   36,   28
 ], [    27,   35,   36
 ], [    28,   37,   29
 ], [    28,   36,   37
 ], [    29,   38,   30
 ], [    29,   37,   38
 ], [    30,   39,   31
 ], [    30,   38,   39
 ], [    31,   32,   24
 ], [    31,   39,   32
 ], [    32,   41,   33
 ], [    32,   40,   41
 ], [    33,   42,   34
 ], [    33,   41,   42
 ], [    34,   43,   35
 ], [    34,   42,   43
 ], [    35,   44,   36
 ], [    35,   43,   44
 ], [    36,   45,   37
 ], [    36,   44,   45
 ], [    37,   46,   38
 ], [    37,   45,   46
 ], [    38,   47,   39
 ], [    38,   46,   47
 ], [    39,   40,   32
 ], [    39,   47,   40
 ], [    40,   49,   41
 ], [    40,   48,   49
 ], [    41,   50,   42
 ], [    41,   49,   50
 ], [    42,   51,   43
 ], [    42,   50,   51
 ], [    43,   52,   44
 ], [    43,   51,   52
 ], [    44,   53,   45
 ], [    44,   52,   53
 ], [    45,   54,   46
 ], [    45,   53,   54
 ], [    46,   55,   47
 ], [    46,   54,   55
 ], [    47,   48,   40
 ], [    47,   55,   48
 ], [    48,   57,   49
 ], [    48,   56,   57
 ], [    49,   58,   50
 ], [    49,   57,   58
 ], [    50,   59,   51
 ], [    50,   58,   59
 ], [    51,   60,   52
 ], [    51,   59,   60
 ], [    52,   61,   53
 ], [    52,   60,   61
 ], [    53,   62,   54
 ], [    53,   61,   62
 ], [    54,   63,   55
 ], [    54,   62,   63
 ], [    55,   56,   48
 ], [    55,   63,   56
 ], [    56,   65,   57
 ], [    56,   64,   65
 ], [    57,   66,   58
 ], [    57,   65,   66
 ], [    58,   67,   59
 ], [    58,   66,   67
 ], [    59,   68,   60
 ], [    59,   67,   68
 ], [    60,   69,   61
 ], [    60,   68,   69
 ], [    61,   70,   62
 ], [    61,   69,   70
 ], [    62,   71,   63
 ], [    62,   70,   71
 ], [    63,   64,   56
 ], [    63,   71,   64
 ], [    64,   73,   65
 ], [    64,   72,   73
 ], [    65,   74,   66
 ], [    65,   73,   74
 ], [    66,   75,   67
 ], [    66,   74,   75
 ], [    67,   76,   68
 ], [    67,   75,   76
 ], [    68,   77,   69
 ], [    68,   76,   77
 ], [    69,   78,   70
 ], [    69,   77,   78
 ], [    70,   79,   71
 ], [    70,   78,   79
 ], [    71,   72,   64
 ], [    71,   79,   72
 ], [    72,   81,   73
 ], [    72,   80,   81
 ], [    73,   82,   74
 ], [    73,   81,   82
 ], [    74,   83,   75
 ], [    74,   82,   83
 ], [    75,   84,   76
 ], [    75,   83,   84
 ], [    76,   85,   77
 ], [    76,   84,   85
 ], [    77,   86,   78
 ], [    77,   85,   86
 ], [    78,   87,   79
 ], [    78,   86,   87
 ], [    79,   80,   72
 ], [    79,   87,   80
 ], [    80,   89,   81
 ], [    80,   88,   89
 ], [    81,   90,   82
 ], [    81,   89,   90
 ], [    82,   91,   83
 ], [    82,   90,   91
 ], [    83,   92,   84
 ], [    83,   91,   92
 ], [    84,   93,   85
 ], [    84,   92,   93
 ], [    85,   94,   86
 ], [    85,   93,   94
 ], [    86,   95,   87
 ], [    86,   94,   95
 ], [    87,   88,   80
 ], [    87,   95,   88
 ], [    88,   97,   89
 ], [    88,   96,   97
 ], [    89,   98,   90
 ], [    89,   97,   98
 ], [    90,   99,   91
 ], [    90,   98,   99
 ], [    91,  100,   92
 ], [    91,   99,  100
 ], [    92,  101,   93
 ], [    92,  100,  101
 ], [    93,  102,   94
 ], [    93,  101,  102
 ], [    94,  103,   95
 ], [    94,  102,  103
 ], [    95,   96,   88
 ], [    95,  103,   96
 ], [    96,  105,   97
 ], [    96,  104,  105
 ], [    97,  106,   98
 ], [    97,  105,  106
 ], [    98,  107,   99
 ], [    98,  106,  107
 ], [    99,  108,  100
 ], [    99,  107,  108
 ], [   100,  109,  101
 ], [   100,  108,  109
 ], [   101,  110,  102
 ], [   101,  109,  110
 ], [   102,  111,  103
 ], [   102,  110,  111
 ], [   103,  104,   96
 ], [   103,  111,  104
 ], [   104,  113,  105
 ], [   104,  112,  113
 ], [   105,  114,  106
 ], [   105,  113,  114
 ], [   106,  115,  107
 ], [   106,  114,  115
 ], [   107,  116,  108
 ], [   107,  115,  116
 ], [   108,  117,  109
 ], [   108,  116,  117
 ], [   109,  118,  110
 ], [   109,  117,  118
 ], [   110,  119,  111
 ], [   110,  118,  119
 ], [   111,  112,  104
 ], [   111,  119,  112
 ], [   112,  121,  113
 ], [   112,  120,  121
 ], [   113,  122,  114
 ], [   113,  121,  122
 ], [   114,  123,  115
 ], [   114,  122,  123
 ], [   115,  124,  116
 ], [   115,  123,  124
 ], [   116,  125,  117
 ], [   116,  124,  125
 ], [   117,  126,  118
 ], [   117,  125,  126
 ], [   118,  127,  119
 ], [   118,  126,  127
 ], [   119,  120,  112
 ], [   119,  127,  120
 ], [   120,    1,  121
 ], [   120,    0,    1
 ], [   121,    2,  122
 ], [   121,    1,    2
 ], [   122,    3,  123
 ], [   122,    2,    3
 ], [   123,    4,  124
 ], [   123,    3,    4
 ], [   124,    5,  125
 ], [   124,    4,    5
 ], [   125,    6,  126
 ], [   125,    5,    6
 ], [   126,    7,  127
 ], [   126,    6,    7
 ], [   127,    0,  120
 ], [   127,    7,    0
 ], [   127,    7,    0
]];