<?php

return [
    'mixins' => [
        'min',
        'pagepicker',
        'picker',
        'preview',
    ],
    'props' => [
        /**
         * Optionally include subpages of pages
         */
        'subpages' => function (bool $subpages = true) {
            return $subpages;
        },
    ],
    'methods' => [
        'toModel' => function ($id = null) {
            return $this->kirby()->page($id));
        }
    ],
    'api' => function () {
        return [
            [
                'pattern' => 'items',
                'action'  => function () {
                    $field = $this->field();
                    $ids   = $this->requestQuery('ids');
                    return $field->toPages($ids);
                }
            ],
            [
                'pattern' => 'options',
                'action' => function () {
                    $field = $this->field();

                    return $field->pagepicker([
                        'info'     => $field->info(),
                        'limit'    => $field->limit(),
                        'page'     => $this->requestQuery('page'),
                        'parent'   => $this->requestQuery('parent'),
                        'preview'  => $field->preview(),
                        'query'    => $field->query(),
                        'search'   => $this->requestQuery('search'),
                        'subpages' => $field->subpages(),
                        'text'     => $field->text()
                    ]);
                }
            ]
        ];
    }
];
